import { computed, Directive, inject, Type } from '@angular/core';
import { ComponentService } from './component.service';
import { ComponentTypes } from './models';
import { mapOutputs } from './rules';

@Directive({
  selector: '[appBaseDynamic]',
})
export abstract class BaseDynamicDirective<TValue, TComponent> {
  private readonly _components = inject(ComponentService);
  protected abstract readonly componentType: keyof ComponentTypes;
  public readonly component = computed(() => this._components.get(this.componentType) as Type<TComponent>);

  public mappedOutputs(component: unknown): Record<string, (...args: any[]) => unknown> | undefined {
    return mapOutputs(component, this.handleComponentEvent.bind(this));
  }

  protected abstract handleComponentEvent(componentId: string, eventName: string, value: TValue): void;
}
