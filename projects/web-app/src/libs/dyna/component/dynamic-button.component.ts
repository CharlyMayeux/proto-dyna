import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractButtonComponent } from '../abstract';
import { BaseDynamicDirective, NgComponentOutlet } from '../base';

@Component({
  selector: 'proto-dynamic-button',
  imports: [NgComponentOutlet],
  templateUrl: './dynamic.component.html',
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
