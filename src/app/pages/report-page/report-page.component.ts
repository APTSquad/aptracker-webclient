import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {
  items = DATA;
  constructor() { }

  ngOnInit() {
  }

}

const DATA = [
  {
    name: 'Клиент1',
    projects: [
      {name: 'Проект1', expenses: [{name: 'Тестирование'}, {name: 'Администрирование'}, {name: 'Затрата 3'}]},
      {name: 'Проект2', expenses: [{name: 'Затрата 1'}, {name: 'Затрата 2'}]},
      {name: 'Проект3', expenses: [{name: 'Затрата 1'}, {name: 'Затрата 2'}, {name: 'Затрата 3'}]},
    ]
  }
  ,
  {
    name: 'Клиент2',
    projects: [
      {name: 'Проект1', expenses: [{name: 'Затрата 1'}, {name: 'Затрата 2'}]},
      {name: 'Проект2', expenses: [{name: 'Затрата 1'}, {name: 'Затрата 2'}, {name: 'Затрата 3'}]},
      {name: 'Проект3', expenses: [{name: 'Затрата 1'}]},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule
  ],
  exports: [ReportPageComponent],
  declarations: [ReportPageComponent],
})
export class ReportPageModule { }
