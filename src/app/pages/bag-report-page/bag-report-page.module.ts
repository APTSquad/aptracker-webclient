import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagReportPageComponent } from './bag-report-page.component';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatError,
  MatProgressBarModule
} from '@angular/material';
import { MDCDataTableModule } from '@angular-mdc/web';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [BagReportPageComponent],
  imports: [
    CommonModule,
    MDCDataTableModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule, MatFormFieldModule, MatInputModule,
    MatButtonModule,
    SatDatepickerModule, SatNativeDateModule,
    NgSelectModule,
    MatProgressBarModule
  ]
})
export class BagReportPageModule { }
