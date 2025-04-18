import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
  Provider,
} from '@angular/core';
import { ComponentTypes } from './abstract';
import { ComponentService } from './base/component.service';

export enum DynaFeatureKind {
  Configuration,
}

export interface DynaFeature<KindT extends DynaFeatureKind> {
  kind: KindT;
  providers: (Provider | EnvironmentProviders)[];
}

export function makeDynaFeature<KindT extends DynaFeatureKind>(
  kind: KindT,
  providers: (Provider | EnvironmentProviders)[]
): DynaFeature<KindT> {
  return {
    kind: kind,
    providers: providers,
  };
}

export function provideDyna(...features: DynaFeature<DynaFeatureKind>[]): EnvironmentProviders {
  const providers: (Provider | EnvironmentProviders)[] = [];
  for (const feature of features) {
    providers.push(...feature.providers);
  }
  return makeEnvironmentProviders(providers);
}

export function withComponentTypes(type: ComponentTypes) {
  return makeDynaFeature(DynaFeatureKind.Configuration, [
    provideEnvironmentInitializer(() => {
      const service = inject(ComponentService);
      service.registerAll(type);
    }),
  ]);
}
