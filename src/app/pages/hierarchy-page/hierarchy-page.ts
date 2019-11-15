
import { ClientService } from '../../services/clientService';
import { Client } from '../../model/client';

import { Component, OnInit, NgModule,Inject } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
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
  MatRippleModule,
  MatDialogModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
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


  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  selectedClient: any = null;
  selectedProject: any = null;

  isShowinput = false;
  isProjectDialog = false;
  isArticleDialog = false;
  isClientDialog = false;
  name: string;

  constructor(private clientService: ClientService,public dialog: MatDialog) {

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

  // showClientDialog(){
  //   this.isArticleDialog = false;
  //   this.isProjectDialog = false;

  //     this.isClientDialog = true;
  //     this.openDialog()
  // }
  // showArticleDialog(){
  //   if(!this.isClientDialog) this.isClientDialog = false;
  //   if(!this.isProjectDialog) this.isProjectDialog = false;
  //  this.isArticleDialog = true;
  //  this.openDialog()
  // }
  // showProjectDialog(){
  //   if(!this.isClientDialog) this.isClientDialog = false;
  //   if(!this.isArticleDialog) this.isArticleDialog = false;
  //   this.isProjectDialog = true;
  //   this.openDialog()
  // }
  

  applyFilter() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HierarchyDialog, {
      width: '450px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      
    });

  }

}


@Component({
  selector: 'hierarchy-dialog',
  templateUrl: 'hierarchy-dialog.html',
})
export class HierarchyDialog {

  constructor(
    public dialogRef: MatDialogRef<HierarchyDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Client) {}

  onNoClick(): void {
    this.dialogRef.close();
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
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [HierarchyPageComponent],
  providers: [ClientService],
  declarations: [HierarchyPageComponent,HierarchyDialog],
  entryComponents:[HierarchyDialog]
})
export class HierarchyPageModule { }
