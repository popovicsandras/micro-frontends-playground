import { Component } from '@angular/core';

@Component({
  selector: 'a15-root',
  template: `
  <div class="navigation">
    <a routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
true}">A15 Host</a>
    <a routerLink="/a14-remote" routerLinkActive="active-link">A14 Remote</a>
    <a routerLink="/a15-remote" routerLinkActive="active-link">A15 Remote</a>
    <a routerLink="/a15-remote-component" routerLinkActive="active-link">A15 Remote component</a>
    <a routerLink="/a15-remote-webcomponent" routerLinkActive="active-link">A15 Remote as web component</a>
    <a routerLink="/a15-remote-webcomponent-as-mf" routerLinkActive="active-link">A15 Remote module federated web component </a>
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
  title = 'a15-host';
}
