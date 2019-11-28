import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private authService: MsalService) { }

  login(): void {
    this.authService.loginPopup(['user.read', 'offline_access', 'api://f2fee166-e82f-4861-a752-83a1c561115d/access_as_user']);
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [LoginPageComponent],
  declarations: [LoginPageComponent],
})
export class LoginPageModule { }
