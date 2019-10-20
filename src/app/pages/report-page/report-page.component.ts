import { Component, OnInit, NgModule } from '@angular/core';
import { TreetableModule, Node, Options } from '../../treetable/treetable.module';
// import { mockTree } from '../../treetable/mocks/mockTree';
// import { mockTreeAsArrayOfNodes } from '../../treetable/mocks/mockTreeAsArrayOfNodes';
import { Folder, Task } from '../../treetable/mocks/models';


@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {
  options: Options<Data> = {
    customColumnOrder: [
      'name', 'isProj'
    ]
  }
  arrayOfNodesTree: Node<Data>[] = mockTreeAsArrayOfNodes;

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
    TreetableModule
  ],
  exports: [ReportPageComponent],
  declarations: [ReportPageComponent],
})
export class ReportPageModule { }

export interface Expense {
  name: string;
  time: number;
}

const mockTreeAsArrayOfNodes: Node<Data>[] = [
  {
    value: {
      name: 'Простой',
      isProj: false
    },
    children: []
  }, {
    value: {
      name: '2018Q4',
      isProj: true
    },
    children: [
      {
        value: {
          name: 'Инициализация',
          isProj: false
        },
        children: []
      }, {
        value: {
          name: 'Работа с требованиями',
          isProj: false
        },
        children: []
      }
    ]
  }, {
    value: {
      name: 'Проект 2',
      isProj: true
    },
    children: [
      {
        value: {
          name: 'Статья 1',
          isProj: false
        },
        children: []
      }, {
        value: {
          name: 'Статья 2',
          isProj: false
        },
        children: []
      }
    ]
  },
];


export interface Project {
  name: string;
  expenses: Expense[];
}

export interface Data {
  name: string;
  isProj: boolean;
}
