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
  MatAutocompleteModule,
  MatProgressBarModule,
  MatDialogRef,
  MatDialog
} from '@angular/material';
import { UsersManagementService } from '../../shared/services/users-service';
import { FormsModule, FormControl, ReactiveFormsModule, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { User } from 'src/app/model';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';
import { skipUntil, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Subscription, of } from 'rxjs';
import { SelectionDialogModule } from 'src/app/shared/selection-dialog/selection-dialog.module';
import { SelectionDialogComponent } from 'src/app/shared/selection-dialog/selection-dialog.component';
import { BagsManagementService } from 'src/app/shared/services/bags-service';


@Component({
  selector: 'app-users-management-page',
  templateUrl: './users-management-page.html',
  styleUrls: ['./users-management-page.scss'],
})
export class UsersManagementPageComponent implements OnInit {
  form: FormGroup;
  myControl = new FormControl();
  selectedUser: User | null = null;
  options: string[] = ['Портфель 000', 'Портфель 001', 'Портфель 002'];
  constructor(private service: UsersManagementService, private fb: FormBuilder, private dialog: MatDialog, public bagService: BagsManagementService) {

  }

  hasError(control: string, error: string) {

    return this.form.controls[control].hasError(error);
  }

  private sub: Subscription;

  users: User[];

  isLoading: boolean = false;
  isLoadingUsers: boolean = true;

  rateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const num = Number(control.value);
      const isCorrect = num >= 10 && num <= 100;

      return !isCorrect ? { 'rateerror': { value: control.value } } : null;
    };
  }

  getFunc() {

  }

  openBagsDialog() {
    this.bagService.getBags().then(bags => {
      const dialogRef = this.dialog.open(SelectionDialogComponent, {
        width: '450px',
        data: {
          header: 'Заголовок',
          items: bags
        }
      });
      dialogRef.afterClosed().subscribe((selected: any) => {
        if (selected == null) {
          return;
        }
        console.log(selected);
        //of(data).pipe(filter((val: any) => val.checked == true)).subscribe(r => console.log(r));
        var data = { id: this.selectedUser!.id, bags: selected };
        this.service.setUserBags(data);
      });
    });



  }

  ngOnInit(): void {
    this.service.getUsers().then(users => {
      this.users = users;
      this.isLoadingUsers = false;
    });
    this.form = this.fb.group({
      name: new FormControl(null, [Validators.minLength(4), Validators.maxLength(15), Validators.required]),
      rate: new FormControl(null, [this.rateValidator()])
    });
  }

  controlHasErrors(controlName: string): boolean {
    return Boolean(this.form.controls[controlName].errors);
  }

  onUserSelected(user: any) {
    this.selectedUser = user;
    if (this.sub) {
      this.sub.unsubscribe();
    }

    this.form.controls['name'].setValue(user.name);
    this.form.controls['rate'].setValue((user.rate * 100).toFixed(2));

    this.sub = this.form.valueChanges.pipe(debounceTime(500)).pipe(distinctUntilChanged())
      .subscribe(val => {
        if (this.form.status == 'VALID') {
          const name = val.name;
          const rate = Number(val.rate) / 100;

          this.isLoading = true;
          this.service.modifyUser({ id: this.selectedUser!.id, name, rate }).then(res => {
            this.selectedUser!.name = name;
            this.selectedUser!.rate = rate;
            this.isLoading = false;
          });
        }

      });
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
    MatProgressBarModule,
    SelectionDialogModule,
    NgxMaskModule.forRoot(),
    TextMaskModule
  ],
  providers: [UsersManagementService],
  exports: [UsersManagementPageComponent],
  declarations: [UsersManagementPageComponent],
})
export class UsersManagementPageModule { }
