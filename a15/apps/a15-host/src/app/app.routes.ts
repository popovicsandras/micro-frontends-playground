import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'a15-remote',
    loadChildren: () =>
      loadRemoteModule('a15-remote', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'a14-remote',
    loadComponent: () =>
        loadRemoteModule('a14-remote', './Module').then(
            (m) => m.RemoteEntryComponent
         ),
  },
  {
    path: 'a15-remote-component',
    loadComponent: () =>
        loadRemoteModule('a15-remote', './Module').then(
            (m) => {
              console.log(m);
              return m.RemoteEntryComponent
            }
         ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
