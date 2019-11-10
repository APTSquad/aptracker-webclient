import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReportPageModule } from './pages/report-page/report-page.component';
import { ClientListPageModule } from './pages/client-list-page/client-list-page';
import { NavBarModule } from './shared/navbar/navbar';
import { UsersManagementPageModule } from './pages/users-management-page/users-management-page';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    NavBarModule,
    ReportPageModule,
    ClientListPageModule,
    UsersManagementPageModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
