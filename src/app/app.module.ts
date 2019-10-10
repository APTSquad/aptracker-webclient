import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ReportPageComponent } from './pages/report-page/report-page.component';
import { ClientListPageModule } from './pages/client-list-page/client-list-page';
import { NavBarModule } from './shared/navbar/navbar';


@NgModule({
  declarations: [
    AppComponent,
    ReportPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    NavBarModule,
    ClientListPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
