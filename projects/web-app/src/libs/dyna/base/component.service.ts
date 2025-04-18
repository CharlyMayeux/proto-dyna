import { Injectable } from '@angular/core';
import { ComponentTypes } from '../abstract';
import { RegistryService } from './registry.service';

@Injectable({
  providedIn: 'root',
})
export class ComponentService extends RegistryService<ComponentTypes> {}
