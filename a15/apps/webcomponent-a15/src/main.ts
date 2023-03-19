import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';

(async () => {
  const app = await createApplication({
    providers: [
      provideRouter(appRoutes, withEnabledBlockingInitialNavigation())
    ],
  });

  const microFrontendApp = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('webcomponent-a15', microFrontendApp);
})();
