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
import { UsersManagementService } from './users-management-service';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/model';
import { TextMaskModule } from 'angular2-text-mask';


@Component({
  selector: 'app-users-management-page',
  templateUrl: './users-management-page.html',
  styleUrls: ['./users-management-page.scss'],
})
export class UsersManagementPageComponent implements OnInit {
  myControl = new FormControl();
  mask = [/\d/, '.', /\d/];
  selectedUser: User | null = null;
  options: string[] = ['Портфель 000', 'Портфель 001', 'Портфель 002'];
  constructor(private service: UsersManagementService) {

  }

  users: User[];

  ngOnInit(): void {
    this.service.getUsers().then(users => this.users = users);
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
    MatAutocompleteModule,
    TextMaskModule
  ],
  providers: [UsersManagementService],
  exports: [UsersManagementPageComponent],
  declarations: [UsersManagementPageComponent],
})
export class UsersManagementPageModule { }
