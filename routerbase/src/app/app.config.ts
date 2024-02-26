import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

import { routes } from './app.routes';
import { enableDebugTools, provideClientHydration } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideClientHydration(),]
};
