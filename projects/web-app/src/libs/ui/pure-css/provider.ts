import { inject, provideEnvironmentInitializer } from '@angular/core';
import { ComponentService, ComponentTypes, DynaFeatureKind, makeDynaFeature } from '@proto/dyna';
import { ButtonComponent } from './button.component';

export function withComponentTypes() {
  const type: ComponentTypes = {
    button: ButtonComponent,
  };
  return makeDynaFeature(DynaFeatureKind.Configuration, [
    provideEnvironmentInitializer(() => {
      const service = inject(ComponentService);
      service.registerAll(type);
    }),
  ]);
}
