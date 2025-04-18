import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractButtonComponent } from '@proto/dyna/abstract';
import { BaseDynamicDirective } from '../../base';

@Component({
  selector: 'app-dynamic-button',
  imports: [],
  templateUrl: './dynamic-button.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: '',
  },
})
export class DynamicButtonComponent
  extends BaseDynamicDirective<void, AbstractButtonComponent>
  implements AbstractButtonComponent
{
  protected override componentType = 'button';
  protected override handleComponentEvent(componentId: string, eventName: string, value: void): void {
    console.debug('[DynamicButtonComponent] - handleComponentEvent', componentId, eventName, value);
  }
}
