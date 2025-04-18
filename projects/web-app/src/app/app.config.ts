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
import { provideDyna } from '@proto/dyna';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideDyna(),
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
