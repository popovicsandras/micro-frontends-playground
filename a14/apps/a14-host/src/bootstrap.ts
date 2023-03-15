import { NxWelcomeComponent } from './app/nx-welcome.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

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
        ],
        { initialNavigation: 'enabledBlocking' }
      )
    ),
  ],
}).catch((err) => console.error(err));
