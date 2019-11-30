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
  MatRippleModule,
  MatAutocompleteModule
} from '@angular/material';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Bag } from 'src/app/model';
import { BagsManagementService } from './bags-management-service';


@Component({
  selector: 'app-bags-management-page',
  templateUrl: './bags-management-page.html',
  styleUrls: ['./bags-management-page.scss'],
})
export class BagsManagementPageComponent implements OnInit {
  myControl = new FormControl();
  selectedBag: Bag | null = null;
  options: string[] = ['Павел', 'Петр'];
  constructor(private service: BagsManagementService) {

  }

  bags: Bag[];

  ngOnInit(): void {
    this.service.getBags().then(bags => this.bags = bags);
  }

}

@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatRippleModule,
    MatAutocompleteModule
  ],
  providers: [BagsManagementService],
  exports: [BagsManagementPageComponent],
  declarations: [BagsManagementPageComponent],
})
export class BagsManagementPageModule { }
