import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'a14-a14-remote-entry',
  template: `<a14-nx-welcome></a14-nx-welcome>`,
})
export class RemoteEntryComponent {}
