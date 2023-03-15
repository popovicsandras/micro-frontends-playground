import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'a15-a15-remote-entry',
  template: `<a15-nx-welcome></a15-nx-welcome>`,
})
export class RemoteEntryComponent {}
