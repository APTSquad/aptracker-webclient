import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule ,
  MatListModule ,
  MatInputModule ,
  MatCardModule ,
  MatButtonModule ,
  MatProgressBarModule ,
  MatAutocompleteModule ,
  MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { options , ReportPageComponent } from './report-page.component';
import { CustomCalendarModule } from 'src/app/shared/custom-calendar/custom-calendar';
import { ReportFormService } from 'src/app/shared/services/report-form-service';

@NgModule ( {
  'imports': [
    CommonModule ,
    MatIconModule ,
    MatListModule ,
    MatButtonModule ,
    MatInputModule ,
    FlexLayoutModule ,
    MatCardModule ,
    MatProgressBarModule ,
    MatAutocompleteModule ,
    ReactiveFormsModule ,
    NgxMaskModule.forRoot ( options ) ,
    MatDialogModule ,
    CustomCalendarModule

  ] ,
  'providers': [ ReportFormService ] ,
  'exports': [ ReportPageComponent ] ,
  'declarations': [ ReportPageComponent ] ,
} )
export class ReportPageModule {}
