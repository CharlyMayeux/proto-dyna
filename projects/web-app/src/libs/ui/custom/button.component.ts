import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractButtonComponent } from '@proto/dyna';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: '',
  },
})
export class ButtonComponent implements AbstractButtonComponent {}
