import { bootstrap } from '@angular-architects/module-federation-tools';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

enableProdMode();

bootstrap(AppModule, {
  production: false,
  appType: 'shell',
});

