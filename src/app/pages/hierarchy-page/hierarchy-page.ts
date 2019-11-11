
import { ClientService } from '../../services/clientService';
import { Client } from '../../model/client';

import { Component, OnInit, ViewChild, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatMenuModule,
  MatInputModule,
  MatCardModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatRippleModule

} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-hierarchy-page',
  templateUrl: './hierarchy-page.html',
  styleUrls: ['./hierarchy-page.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientListPageComponent implements OnInit {

  clients: Client[];
  pepa: string;
  // ArticlesData: string[] = [
  //   'Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers','Maia', 'Asher', 'Olivia',  'Asher', 'Olivia'
  // ]


  //  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //  @ViewChild(MatSort, { static: true }) sort: MatSort;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  selectedClient: any = null;
  selectedProject: any = null;

  isShowinput = false;


  constructor(private clientService: ClientService) {

  }

  ngOnInit() {
    this.clientService.getClients().then(data => {
      this.clients = data;
    });
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

  }

  showInput() {
    this.isShowinput = !this.isShowinput;
  }


}

//   ArticleData:Client[]=[
//       {
//         name:'Boots',
//         activeNum:5,
//       },
//       {
//         name:'Charlotte',
//         activeNum:10,
//       },
//       {
//         name: 'Clogs',
//         activeNum:2,
//       },
//       {
//         name:'Boots',
//         activeNum:15,
//       },
//       {
//         name:'Charlotte',
//         activeNum:11,
//       },
//       {
//         name:'Charlotte',
//         activeNum:12,
//       },
//       {
//         name:'Boots',
//         activeNum:18,
//       },


//   ]
// }

// interface Client{
//   name:string;
//   activeNum:number;
// }



@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    ScrollingModule,
    MatAutocompleteModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ClientListPageComponent],
  providers: [ClientService],
  declarations: [ClientListPageComponent],
})
export class ClientListPageModule { }
