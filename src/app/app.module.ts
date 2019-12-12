import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReportPageModule } from './pages/report-page/report-page.component';
import { HierarchyPageModule } from './pages/hierarchy-page/hierarchy-page';
import { NavBarModule } from './shared/navbar/navbar';
import { SCOPES } from './shared/configuration/scopes';
import { UsersManagementPageModule } from './pages/users-management-page/users-management-page';
import { BagsManagementPageModule } from './pages/bags-management-page/bags-management-page';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { LogLevel } from 'msal';
import { MatButtonModule } from '@angular/material';
// tslint:disable-next-line:max-line-length
import { HierarchyDialogModule } from './shared/selection-dialog/selection-dialog';
// tslint:disable-next-line: max-line-length
export const protectedResourceMap: [string, string[]][] = [['https://localhost:5001/api', ['api://f2fee166-e82f-4861-a752-83a1c561115d/access_as_user', 'offline_access']], ['https://graph.microsoft.com/v1.0/me', ['user.read']]];

export function loggerCallback(logLevel: any, message: any, piiEnabled: any) {
  console.log(message);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MsalModule.forRoot({
      clientID: 'f2fee166-e82f-4861-a752-83a1c561115d',
      authority: 'https://login.microsoftonline.com/common/',
      validateAuthority: true,
      cacheLocation: 'localStorage',
      redirectUri: 'http://localhost:4200/',
      logger: loggerCallback,
      correlationId: '1234',
      level: LogLevel.Verbose,
      piiLoggingEnabled: true,
      protectedResourceMap: protectedResourceMap,
      consentScopes: SCOPES,
    }),
    MatButtonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    NavBarModule,
    ReportPageModule,
    HierarchyPageModule,
    BagsManagementPageModule,
    UsersManagementPageModule,
    HierarchyDialogModule,
    HttpClientModule,
  ],
  providers: [HttpClient, { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
