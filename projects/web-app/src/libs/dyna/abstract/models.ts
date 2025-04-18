import { Type } from '@angular/core';
import { AbstractButtonComponent } from '.';

export interface ComponentTypes extends Record<string, Type<unknown>> {
  button: Type<AbstractButtonComponent>;
}
