import { ChangeDetectionStrategy, Component, effect, ViewEncapsulation } from '@angular/core';
import { AbstractButtonComponent } from '../abstract';
import { BaseDynamicDirective, NgComponentOutlet } from '../base';
//https://dev.to/railsstudent/new-angular-19-feature-ngcomponentoutlet-componentinstance-120e
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

  constructor() {
    super();
    effect(() => {
      const outlet = this.outlet();
      console.debug('[DynamicButtonComponent] - effect', outlet);
    });
  }

  protected override handleComponentEvent(componentId: string, eventName: string, value: void): void {
    console.debug('[DynamicButtonComponent] - handleComponentEvent', componentId, eventName, value);
  }
}
