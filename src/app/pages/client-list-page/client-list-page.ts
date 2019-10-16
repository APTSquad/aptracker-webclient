import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {CommonModule} from '@angular/common';
import {
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.html',
  styleUrls: ['./client-list-page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientListPageComponent implements OnInit {

  dataSource = ELEMENT_DATA;

  columnsToDisplay = ['No','name'];
  expandedElement: PeriodicElement | null;

  // dataSource: MatTableDataSource<UserData>;

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {

  }

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

//   applyFilter(filterValue: string) {
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
 }


export interface PeriodicElement {
  No:number;
  name: string;
  projects:string[];
  //description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    No: 1,
    name: 'Hydrogen',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    No: 2,
    name: 'Helium',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
  }, {
    No: 3,
    name: 'Lithium',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
  }, {
    No: 4,
    name: 'Beryllium',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
  }, {
    No: 5,
    name: 'Boron',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
  }, {
    No: 6,
    name: 'Carbon',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    No: 7,
    name: 'Nitrogen',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    No: 8,
    name: 'Oxygen',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    No: 9,
    name: 'Fluorine',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    No: 10,
    name: 'Neon',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  },
];


@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    CommonModule
  ],
  exports: [ClientListPageComponent],
  declarations: [ClientListPageComponent],
})
export class ClientListPageModule { }
