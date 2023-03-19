import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

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
      loadRemoteModule('a15-remote', './Module').then((m) => {
        console.log(m);
        return m.RemoteEntryComponent;
      }),
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
    loadChildren: () =>
      loadRemoteModule('webcomponent-a15-as-mf', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  // {
  //   path: 'a15-remote-webcomponent-as-mf',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'script',
  //     remoteEntry: 'http://localhost:5203/remoteEntry.js',
  //     exposedModule: './web-components',
  //     elementName: 'webcomponent-a15-as-mf',
  //   } as WebComponentWrapperOptions
  // },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
