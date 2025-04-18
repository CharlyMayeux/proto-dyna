import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withDebugTracing,
  withHashLocation,
  withPreloading,
} from '@angular/router';

import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideDyna /*withComponentTypes*/ } from '@proto/dyna';
import { withComponentTypes } from '@proto/ui/skeleton-css';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideDyna(
      // From App
      // withComponentTypes({
      //   button: ButtonComponent,
      // })
      // Custom
      // Pure CSS
      // Materialize CSS
      // Skeleton CSS
      withComponentTypes()
    ),
    provideRouter(
      routes,
      withDebugTracing(),
      withHashLocation(),
      withPreloading(PreloadAllModules),
      withComponentInputBinding()
    ),
    provideClientHydration(withEventReplay()),
  ],
};
