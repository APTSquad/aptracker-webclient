import { Component, ViewEncapsulation } from '@angular/core';
import { IdentityService } from './shared/services/identity-service';

@Component({
  selector: 'adeptik-tracker-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'APTracker-WebClient';
  loggedIn: boolean = false;
  isIframe: boolean;
  constructor(public identity: IdentityService) {
    this.isIframe = window !== window.parent && !window.opener;
  }
}
