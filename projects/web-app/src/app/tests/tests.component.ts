import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { DynamicButtonComponent } from '@proto/dyna';

@Component({
  selector: 'app-tests',
  imports: [DynamicButtonComponent],
  templateUrl: './tests.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsComponent {}
