import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AbstractButtonComponent } from '@proto/dyna';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './style.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: '',
  },
})
export class ButtonComponent implements AbstractButtonComponent {}
