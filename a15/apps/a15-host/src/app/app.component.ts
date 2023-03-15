import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'a15-root',
  template: ` <a15-nx-welcome></a15-nx-welcome> `,
  styles: [],
})
export class AppComponent {
  title = 'a15-host';
}
