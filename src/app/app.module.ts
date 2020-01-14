import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { SCOPES } from './shared/configuration/scopes';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { LogLevel } from 'msal';
import { MatButtonModule } from '@angular/material';
import { HierarchyDialogModule } from './shared/hierarchy-dialog/hierarchy-dialog';
// tslint:disable-next-line:max-line-length
export const protectedResourceMap: [string, string[]][] = [['http://localhost:5000/api', ['api://f2fee166-e82f-4861-a752-83a1c561115d/access_as_user', 'offline_access']], ['https://graph.microsoft.com/v1.0/me', ['user.read']]];

import { LoggingInterceptor } from './shared/http/http-logging.interceptor'
import { NavBarModule } from './shared/navbar/navbar.module';
// tslint:disable-next-line: max-line-length
import { UsersManagementPageModule } from './pages/users-management-page/users-management-page.module';
import { BagsManagementPageModule } from './pages/bags-management-page/bags-management-page.module';
import { BagManagementPageModule } from './pages/bag-management-page/bag-management.module'
import { HierarchyPageModule } from './pages/hierarchy-page/hierarchy-page.module';
import { ReportPageModule } from './pages/report-page/report-page.module';
import { BagReportPageModule } from './pages/bag-report-page/bag-report-page.module';
import { CommonArticlesPageModule } from './pages/common-articles-page/common-articles-page.module';


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
      redirectUri: 'http://localhost:4200/auth',
      navigateToLoginRequestUrl: false,
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
    BagManagementPageModule,
    HierarchyDialogModule,
    HttpClientModule,
    BagReportPageModule,
    CommonArticlesPageModule
  ],
  providers: [HttpClient,
    {
      provide:
        HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
