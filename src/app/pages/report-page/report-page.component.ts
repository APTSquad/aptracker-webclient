import {
  Component,
  OnInit,
  NgModule,
  ViewEncapsulation,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import {CustomCalendarModule} from '../../shared/custom-calendar/custom-calendar';


@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportPageComponent implements OnInit {
  percent: number = 0;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  @ViewChildren('expenseTime') expenseTime: QueryList<ElementRef>;
  input() {
    this.percent =  this
                    .expenseTime
                    .filter(t => t.nativeElement.value)
                    .length / this.expenseTime.length * 100;
  }
  items = DATA;
  constructor() { }

  ngOnInit() {
  }

}

const DATA = [
  {
    name: 'Клиент1',
    selected: true,
    projects: [
      {
        name: 'Проект1',
        expenses: [
          {name: 'Тестирование'}, {name: 'Администрирование'}, {name: 'Затрата 3'}
        ]
      },
      {
        name: 'Проект2',
        expenses: [
          {name: 'Затрата 1'}, {name: 'Затрата 2'}, {name: 'Затрата 3'}
        ]
      },
      {
        name: 'Проект1',
        expenses: [
          {name: 'Затрата 1'}, {name: 'Затрата 2'}, {name: 'Затрата 3'}
        ]
      },
    ]
  },
  {
    name: 'Клиент2',
    selected: false,
    projects: [
      {
        name: 'Проект1',
        expenses: [
          {name: 'Тестирование'}, {name: 'Администрирование'}, {name: 'Затрата 3'}
        ]
      },
      {
        name: 'Проект2',
        expenses: [
          {name: 'Затрата 1'}, {name: 'Затрата 2'}, {name: 'Затрата 3'}
        ]
      },
      {
        name: 'Проект1',
        expenses: [
          {name: 'Затрата 1'}, {name: 'Затрата 2'}, {name: 'Затрата 3'}
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    CustomCalendarModule
  ],
  exports: [ReportPageComponent],
  declarations: [ReportPageComponent],
})
export class ReportPageModule { }
