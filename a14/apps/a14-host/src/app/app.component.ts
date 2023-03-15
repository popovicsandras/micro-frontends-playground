import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'a14-root',
  template: ` <a14-nx-welcome></a14-nx-welcome> `,
  styles: [],
})
export class AppComponent {
  title = 'a14-host';
}
