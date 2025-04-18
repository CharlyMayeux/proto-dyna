import { EnvironmentProviders, makeEnvironmentProviders, Provider } from '@angular/core';

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

export function provideDyna(...features: DynaFeature<DynaFeatureKind>[]): EnvironmentProviders {
  const providers: (Provider | EnvironmentProviders)[] = [];
  for (const feature of features) {
    providers.push(...feature.providers);
  }
  return makeEnvironmentProviders(providers);
}
