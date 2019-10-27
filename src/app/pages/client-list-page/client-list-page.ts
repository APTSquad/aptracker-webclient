
import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatMenuModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.html',
  styleUrls: ['./client-list-page.scss'],
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({ height: '0px', minHeight: '0' })),
  //     state('expanded', style({ height: '*' })),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
})
export class ClientListPageComponent implements OnInit {

  ClientsData: string[] = [
    'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Maia', 'Asher', 'Olivia', 
    'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 
  ]


  //columnsToDisplay = ['id', 'name', 'Update'];
  //expandedElement: PeriodicElement | null;
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // projcolumnsToDisplay = ['id', 'name', 'Update'];

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {

  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

}




@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule
  ],
  exports: [ClientListPageComponent],
  declarations: [ClientListPageComponent],
})
export class ClientListPageModule { }
