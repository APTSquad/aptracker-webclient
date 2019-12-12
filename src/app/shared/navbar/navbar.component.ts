import { Component } from '@angular/core';
import { NAV_SECTIONS, NAV_LINKS } from '../configuration/pages';
import { IdentityService } from '../services/identity-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private identity: IdentityService) { }
  get navSection() {
    return NAV_SECTIONS[this.currentSection];
  }

  logOut(): void {
    this.identity.logOut();
  }


  get navLinks() {
    return NAV_LINKS;
  }

  get currentSection() {
    return this.identity.role;
  }

  get isLoggedIn() {
    return this.identity.isLoggedIn;
  }

  get userName() {
    return this.identity.name;
  }
}

