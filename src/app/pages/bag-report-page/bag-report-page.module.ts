import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagReportPageComponent } from './bag-report-page.component';
import { MatTableModule } from '@angular/material';



@NgModule({
  declarations: [BagReportPageComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class BagReportPageModule { }
