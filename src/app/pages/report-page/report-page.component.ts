import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';
import {
  MatDialog
} from '@angular/material';
import { FormControl } from '@angular/forms';
import { IConfig } from 'ngx-mask'
import { HierarchyDialogComponent } from 'src/app/shared/hierarchy-dialog/hierarchy-dialog';

export enum HierarchyDialogType {
  Client, Article, Project
}

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReportPageComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  public customPatterns = {
    '0': { pattern: new RegExp('\[0-9\]') },
    '9': { pattern: new RegExp('\[05\]') }
  };
  percent: number = 0;
  time: number = 8;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  @ViewChildren('expenseTime') expenseTime: QueryList<ElementRef>;
  input() {
    this.percent = this
      .expenseTime
      .filter(t => t.nativeElement.value)
      .reduce((x, y) => {
        return x + parseFloat(y.nativeElement.value);
      }, 0);

    this.percent = this.percent * 100 / this.time;
    console.log(this.percent);
  }

  finish(event: any) {
    let addable = '';
    if (event.target.value.length == 1)
      addable = '.0';
    else if (event.target.value.length == 2)
      addable = '0';
    event.target.value += addable;
  }

  selectClient() {
    const dialogRef = this.dialog.open(HierarchyDialogComponent, {
      width: '450px',
      data: {
        header: 'Заголовок',
        items: [{ name: 'Вариант 1' }, { name: 'Вариант 2' }]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

  items = DATA;

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
          { name: 'Тестирование' }, { name: 'Администрирование' }, { name: 'Затрата 3' }
        ]
      },
      {
        name: 'Проект2',
        expenses: [
          { name: 'Затрата 1' }, { name: 'Затрата 2' }, { name: 'Затрата 3' },
          { name: 'Затрата 1' }, { name: 'Затрата 2' }, { name: 'Затрата 3' },
        ]
      },
      {
        name: 'Проект1',
        expenses: [
          { name: 'Затрата 1' }, { name: 'Затрата 2' }, { name: 'Затрата 3' }
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
          { name: 'Тестирование' }, { name: 'Администрирование' }, { name: 'Затрата 3' }
        ]
      },
      {
        name: 'Проект2',
        expenses: [
          { name: 'Затрата 1' }, { name: 'Затрата 2' }, { name: 'Затрата 3' }
        ]
      },
      {
        name: 'Проект1',
        expenses: [
          { name: 'Затрата 1' }, { name: 'Затрата 2' }, { name: 'Затрата 3' }
        ]
      },
    ]
  }
];

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
