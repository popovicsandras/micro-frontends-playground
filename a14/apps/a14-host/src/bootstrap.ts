import { NxWelcomeComponent } from './app/nx-welcome.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { loadRemoteModule } from '@nrwl/angular/mf';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(
        [
          {
            path: '',
            component: NxWelcomeComponent,
          },
          {
            path: 'a14-remote',
            loadComponent: () =>
                loadRemoteModule('a14-remote', './Module').then(
                    (m) => m.RemoteEntryComponent
                 ),
          },
          {
            path: 'a15-remote',
            loadComponent: () =>
                loadRemoteModule('a15-remote', './Module').then(
                    (m) => m.RemoteEntryComponent
                 ),
          },
          {
            path: 'a15-remote-webcomponent',
            component: WebComponentWrapper,
            data: {
              type: 'script',
              remoteEntry: 'http://localhost:5202/web-component.js',
              // exposedModule: './web-components',
              elementName: 'webcomponent-a15',
            } as WebComponentWrapperOptions
          },
          {
            path: 'a15-remote-webcomponent-as-mf',
            component: WebComponentWrapper,
            data: {
              type: 'module',
              remoteEntry: 'http://localhost:5203/remoteEntry.mjs',
              remoteName: 'remote-webcomponent-a15-as-mf',
              exposedModule: './web-components',
              elementName: 'webcomponent-a15-as-mf',
            } as WebComponentWrapperOptions
          }
        ],
        { initialNavigation: 'enabledBlocking' }
      )
    ),
  ],
}).catch((err) => console.error(err));
