
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
export class HierarchyPageComponent implements OnInit {

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

  applyFilter(value: string) {

  }


}




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
  exports: [HierarchyPageComponent],
  providers: [ClientService],
  declarations: [HierarchyPageComponent],
})
export class HierarchyPageModule { }
