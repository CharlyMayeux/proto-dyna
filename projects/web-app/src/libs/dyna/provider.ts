import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
  Provider,
} from '@angular/core';
import { ComponentTypes } from './abstract';
import { ComponentService } from './base/component.service';

export enum DynaFeatureKind {}

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

export function provideDyna(type: ComponentTypes, ...features: DynaFeature<DynaFeatureKind>[]): EnvironmentProviders {
  const providers: (Provider | EnvironmentProviders)[] = [
    provideEnvironmentInitializer(() => {
      const service = inject(ComponentService);
      service.registerAll(type);
    }),
  ];
  for (const feature of features) {
    providers.push(...feature.providers);
  }
  return makeEnvironmentProviders(providers);
}
