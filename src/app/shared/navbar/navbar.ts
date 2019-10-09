import { Component, NgModule } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NAV_SECTIONS, NAV_LINKS, ROLE_ADMIN } from '../configuration/pages'
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { ThemePickerModule } from '../theme-picker';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  get navSection () {
    return NAV_SECTIONS[this.currentSection];
  }

  get navLinks () {
    return NAV_LINKS;
  }

  get currentSection () {
    return ROLE_ADMIN;
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