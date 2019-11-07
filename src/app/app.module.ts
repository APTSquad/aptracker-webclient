import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReportPageModule } from './pages/report-page/report-page';
import { ClientListPageModule } from './pages/client-list-page/client-list-page';
import { NavBarModule } from './shared/navbar/navbar';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    NavBarModule,
    ClientListPageModule,
    ReportPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
