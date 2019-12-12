import { MAT_DATE_LOCALE, DateAdapter, NativeDateAdapter} from '@angular/material/core';
import { Component, OnInit, NgModule, Input, ViewEncapsulation} from '@angular/core';

import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import {FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DateService, DateI, DateType } from './dateService';




@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.html'
})
export class CustomCalendarComponent implements OnInit {



  constructor(private date: DateService) { }

  // Array of dates that (required fill and filled dates)
  dates = this.date.dData;



  ngOnInit() {
  }

}

@Component({
  selector: 'custom-dates',
  templateUrl: 'custom-dates.html',
  styleUrls: ['./custom-calendar.scss'],
  encapsulation: ViewEncapsulation.None,
})
// tslint:disable-next-line:one-line
export class CustomDatesComponent extends NativeDateAdapter{
   date: DateService;
  // constructor( ) { }

 // private _datesArray: Array<Date[]>;
  private _datesArray: Array<DateI>;


  // days that's not require fill
    tomorrow = new Date();


  // get chose date
  getChosedate: Date; // new FormControl(new Date()); // unutlized yet
  @Input()
  max: Date | null;


  minDate = new Date(2010, 0, 1);
  maxDate = new Date(2020, 0, 1);

  @Input()
  get datesArray(): Array<DateI> {return this._datesArray; }
  set datesArray(d: Array<DateI>) {
    this._datesArray = d;

    this._setupClassFunction();
  }


  dateClass: (d: Date) => any;

  private _setupClassFunction() {

    this.dateClass = (d: Date) => {
      let requirefill = false;
      let filled = false;

      if (this._datesArray[0].type == DateType.REQUIRED) {
        requirefill = this._datesArray[0].date.some((item: Date) =>
          item.getFullYear() === d.getFullYear()
          && item.getDate() === d.getDate()
          && item.getMonth() === d.getMonth());
        if (requirefill) {
          return 'requireFill-custom-date-class';
        }
        // return filled ? 'filled-custom-date-class' : undefined;
      }

      if (this._datesArray[1].type == DateType.REPORTED) {
        filled = this._datesArray[1].date.some((item: Date) =>
          item.getFullYear() === d.getFullYear()
          && item.getDate() === d.getDate()
          && item.getMonth() === d.getMonth());
        return filled ? 'filled-custom-date-class' : undefined;
      }

      return;
    };
  }


  // filterWeekendDates = (d: Date): boolean => {
  //   const day = d.getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }


  getFirstDayOfWeek(): number {
    return 1;
  }
}

@NgModule ({

  imports: [
    CommonModule ,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],

  exports: [CustomCalendarComponent],
  providers: [DateService,
  // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'ru'},
    {provide: DateAdapter, useClass:  CustomDatesComponent }
  ],
  declarations: [CustomCalendarComponent, CustomDatesComponent],
})

export class CustomCalendarModule { }

