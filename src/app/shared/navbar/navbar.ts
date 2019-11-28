import { Component, NgModule } from '@angular/core';
import { NAV_SECTIONS, NAV_LINKS, ROLE_ADMIN } from '../configuration/pages';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { ThemePickerModule } from '../theme-picker';
import { IdentityService } from '../services/identity-service/identity-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
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
    return ROLE_ADMIN;
  }

  get isLoggedIn() {
    return this.identity.isLoggedIn;
  }

  get userName() {
    return this.identity.name;
  }
}

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    ThemePickerModule,
    CommonModule
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
})
export class NavBarModule { }
