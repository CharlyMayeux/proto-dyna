import { computed, Directive, inject, Type } from '@angular/core';
import { ComponentDef, ComponentTypes } from '../abstract';
import { ComponentService } from './component.service';
import { mapOutputs } from './rules';

@Directive({
  selector: '[appBaseDynamic]',
})
export abstract class BaseDynamicDirective<TValue, TComponent> {
  private readonly _components = inject(ComponentService);
  protected abstract readonly componentType: keyof ComponentTypes;
  public readonly component = computed(() => this._components.get(this.componentType) as Type<TComponent>);

  public readonly componentDef = computed(() => {
    const cmp = this.component();
    if (!cmp) return undefined;
    const def: ComponentDef<TComponent> = {
      component: cmp,
    };
    return def;
  });

  public mappedOutputs(component: unknown): Record<string, (...args: any[]) => unknown> | undefined {
    return mapOutputs(component, this.handleComponentEvent.bind(this));
  }

  protected abstract handleComponentEvent(componentId: string, eventName: string, value: TValue): void;
}
