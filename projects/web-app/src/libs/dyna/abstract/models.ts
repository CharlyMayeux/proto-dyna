import { Type } from '@angular/core';
import { AbstractButtonComponent } from './abstract-button';

export interface ComponentTypes extends Record<string, Type<unknown>> {
  button: Type<AbstractButtonComponent>;
}

export interface ComponentDef<T = unknown> {
  component: Type<T>;
  inputs?: Record<string, unknown>;
}
