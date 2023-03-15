import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'a14-root',
  template: `
    <div class="navigation">
      <a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
true}">A14 Host</a>
      <a routerLink="/a14-remote" routerLinkActive="active-link">A14 Remote</a>
      <a routerLink="/a15-remote" routerLinkActive="active-link">A15 Remote</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
  .navigation {
    display: flex;
    justify-content: center;
    padding: 20px;
    gap: 24px;
    background-color: #eee;
  }
  .active-link {
    text-decoration: underline;
  }
  `],
})
export class AppComponent {
  title = 'a14-host';
}
