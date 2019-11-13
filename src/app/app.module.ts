import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReportPageModule } from './pages/report-page/report-page.component';
import { ClientListPageModule } from './pages/hierarchy-page/hierarchy-page';
import { NavBarModule } from './shared/navbar/navbar';
import { UsersManagementPageModule } from './pages/users-management-page/users-management-page';



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
    UsersManagementPageModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
