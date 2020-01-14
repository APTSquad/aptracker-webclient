import { MAT_DATE_LOCALE, DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { Component, OnInit, NgModule, Input, ViewEncapsulation, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatDatepickerModule, MatDatepicker, MatDatepickerInput } from '@angular/material/datepicker';
import {
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { DateService } from './dateService';
import { CustomDates } from 'src/app/model/CustomDates';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.html'
})
export class CustomCalendarComponent implements OnInit, AfterViewInit {
  @Output() dateChanged: EventEmitter<any> = new EventEmitter();
  ngAfterViewInit(): void {
  }

  @Input()
  dateFormControl: FormControl;

  onDateChange(data: any) {
    this.dateChanged.emit(data);
  }


  constructor(private date: DateService) { }

  // Array of dates that (required fill and filled dates)
  // dates = this.date.dData;

  dates: CustomDates[];

  ngOnInit() {
    this.date.getDatesById(3).subscribe(data => {
      this.dates = data;
      console.log('dates: ' + this.dates[0].date);
    });

  }

}

@Component({
  selector: 'custom-dates',
  templateUrl: 'custom-dates.html',
  styleUrls: ['./custom-calendar.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomDatesComponent extends NativeDateAdapter {

  date: DateService;

  @Input()
  dateFormControl: FormControl;


  private _datesArray: Array<CustomDates>;


  // days that's not require fill
  tomorrow = new Date();


  // get chose date
  getChosedate: Date; // new FormControl(new Date()); // unutlized yet
  @Input()
  max: Date | null;


  minDate = new Date(2010, 0, 1);
  maxDate = new Date(2020, 0, 1);

  @Input()
  get datesArray(): Array<CustomDates> { return this._datesArray; }
  set datesArray(d: Array<CustomDates>) {
    this._datesArray = d;

    this._setupClassFunction();
  }


  dateClass: (d: Date) => any;
  cdate = this._datesArray;

  private _setupClassFunction() {

    this.dateClass = (d: Date) => {
      let requirefill = false;
      let filled = false;
      let itWeekends = false;

      for (let dte in this._datesArray) {

        if (this._datesArray[dte].state == 0 || this._datesArray[dte].state == 2) {
          let item = new Date(this._datesArray[dte].date);
          requirefill = (
            item.getFullYear() === d.getFullYear()
            && item.getDate() === d.getDate()
            && item.getMonth() === d.getMonth());
          if (requirefill) {
            return 'requireFill-custom-date-class';
          }
        }

        if (this._datesArray[dte].state == 1) {
          let item = new Date(this._datesArray[dte].date);
          filled = (
            item.getFullYear() === d.getFullYear()
            && item.getDate() === d.getDate()
            && item.getMonth() === d.getMonth());
          if (filled) {
            return 'filled-custom-date-class';
          }
        }

        if (this._datesArray[dte].state == 3) {
          let item = new Date(this._datesArray[dte].date);
          itWeekends = (
            item.getFullYear() === d.getFullYear()
            && item.getDate() === d.getDate()
            && item.getMonth() === d.getMonth());
          if (itWeekends) {
            return 'itWeekends-custom-date-class';
          }
        }


      }

      return;
    };
  }

  getFirstDayOfWeek(): number {
    return 1;
  }
}

@NgModule({

  imports: [
    CommonModule,
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
    { provide: MAT_DATE_LOCALE, useValue: 'ru' },
    { provide: DateAdapter, useClass: CustomDatesComponent }
  ],
  declarations: [CustomCalendarComponent, CustomDatesComponent],
})

export class CustomCalendarModule { }

