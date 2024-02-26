import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MydirectiveDirective } from './mydirective.directive';
import { ServicService } from './services/servic.service';
import { AboutcpComponent } from './aboutcp/aboutcp.component';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),MydirectiveDirective,ServicService,AboutcpComponent],

};
