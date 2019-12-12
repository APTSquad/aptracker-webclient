import { Component, OnInit, NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatDialogRef,
  MatDialog,
  MatDialogModule
} from '@angular/material';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Bag } from 'src/app/model';
import { BagsManagementService } from '../../shared/services/bags-service';
import { BagCreationDialogComponent } from './bag-creation-dialog/bag-creation-dialog.component';
import { filter } from 'rxjs/operators';
import { BagCreationDialogModule } from './bag-creation-dialog/bag-creation-dialog.module';



@Component({
  selector: 'app-bags-management-page',
  templateUrl: './bags-management-page.html',
  styleUrls: ['./bags-management-page.scss'],
})
export class BagsManagementPageComponent implements OnInit {
  myControl = new FormControl();
  selectedBag: Bag | null = null;
  options: string[] = ['Павел', 'Петр'];

  bagCreateDialogRef: MatDialogRef<BagCreationDialogComponent>;

  constructor(private service: BagsManagementService, private dialog: MatDialog) {

  }

  createBagClick() {
    this.bagCreateDialogRef = this.dialog.open(BagCreationDialogComponent, {
      //hasBackdrop: false
    });

    this.bagCreateDialogRef
      .afterClosed()
      .pipe(filter(name => name))
      .subscribe(data => {
        console.log(data);
        this.service.createBag(data).then(result => {
          this.bags.push(result);
        });
      });
  }

  bags: Bag[];

  ngOnInit(): void {
    this.service.getBags().then(bags => this.bags = bags);
  }

}

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    BagCreationDialogModule
  ],
  providers: [BagsManagementService],
  exports: [BagsManagementPageComponent],
  declarations: [BagsManagementPageComponent],
  entryComponents: [BagCreationDialogComponent]
})
export class BagsManagementPageModule { }
