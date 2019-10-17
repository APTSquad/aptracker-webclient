import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {CommonModule} from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
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

  //dataSource = ELEMENT_DATA;

  columnsToDisplay = ['id','name','Update'];
  expandedElement: PeriodicElement | null;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);



   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
   @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 }





export interface PeriodicElement {
  id:number;
  name: string;
  projects:string[];
  //description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'Hydrogen',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 2,
    name: 'Helium',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
  }, {
    id: 3,
    name: 'Lithium',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
  }, {
    id: 4,
    name: 'Beryllium',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
  }, {
    id: 5,
    name: 'Boron',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
  }, {
    id: 6,
    name: 'Carbon',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 7,
    name: 'Nitrogen',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 8,
    name: 'Oxygen',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 9,
    name: 'Fluorine',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 10,
    name: 'Neon',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 11,
    name: 'Nitrogen',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 12,
    name: 'Oxygen',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 13,
    name: 'Fluorine',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 14,
    name: 'Neon',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 15,
    name: 'Nitrogen',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 16,
    name: 'Oxygen',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 17,
    name: 'Fluorine',
    projects: [
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project',
      ' Hydrogen is a chemical element with project'
    ]
    
  }, {
    id: 18,
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
    CommonModule,
    MatButtonModule
  ],
  exports: [ClientListPageComponent],
  declarations: [ClientListPageComponent],
})
export class ClientListPageModule { }
