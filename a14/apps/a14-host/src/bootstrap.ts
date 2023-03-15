import { NxWelcomeComponent } from './app/nx-welcome.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { loadRemoteModule } from '@nrwl/angular/mf';

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
          }
        ],
        { initialNavigation: 'enabledBlocking' }
      )
    ),
  ],
}).catch((err) => console.error(err));
