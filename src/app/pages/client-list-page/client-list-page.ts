
import { Component, OnInit, ViewChild, NgModule,ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {ScrollingModule} from '@angular/cdk/scrolling';
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


@Component({
  selector: 'app-client-list-page',
  templateUrl: './client-list-page.html',
  styleUrls: ['./client-list-page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientListPageComponent implements OnInit {

  // ClientsData: string[] = [
  //   'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Maia', 'Asher', 'Olivia', 
  //   'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 
  //   'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 
  //   'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 
  //   'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 
  // ]

  // ArticlesData: string[] = [
  //   'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Maia', 'Asher', 'Olivia',  'Asher', 'Olivia'
  // ]
  

  //  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //  @ViewChild(MatSort, { static: true }) sort: MatSort;

  isShowp = false;
  isShowa = false;

  constructor() {

  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  Displayproj(){
    this.isShowp = !this.isShowp;
  }
  Displayart(){
    this.isShowa = !this.isShowa;
  }

  applyFilter(filterValue: string) {
    //  this.ClientsData.filter = filterValue.trim().toLowerCase();

    //  if (this.ClientsData.paginator) {
    //    this.ClientsData.paginator.firstPage();
    //  }
  }


   ClientData:Client[] =[
    {
      name:'Boots',
      activeNum:5,
    },
    {
      name:'Charlotte',
      activeNum:3,
    },
    {
      name: 'Clogs',
      activeNum:2,
    },
    {
      name:'Boots',
      activeNum:6,
    },
    {
      name:'Charlotte',
      activeNum:7,
    },
    {
      name:'Charlotte',
      activeNum:4,
    },
    {
      name:'Boots',
      activeNum:8,
    },
    {
      name:'Boots',
      activeNum:3,
    },
    {
      name:'Charlotte',
      activeNum:7,
    },
    {
      name:'Atticus',
      activeNum:9,
    },
  ]

  ArticleData:Client[]=[
      {
        name:'Boots',
        activeNum:5,
      },
      {
        name:'Charlotte',
        activeNum:10,
      },
      {
        name: 'Clogs',
        activeNum:2,
      },
      {
        name:'Boots',
        activeNum:15,
      },
      {
        name:'Charlotte',
        activeNum:11,
      },
      {
        name:'Charlotte',
        activeNum:12,
      },
      {
        name:'Boots',
        activeNum:18,
      },
      
    
  ]
}

interface Client{
  name:string;
  activeNum:number;
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
    FlexLayoutModule,
    ScrollingModule
  ],
  exports: [ClientListPageComponent],
  declarations: [ClientListPageComponent],
})
export class ClientListPageModule { }
