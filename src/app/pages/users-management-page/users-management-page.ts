import { Component, OnInit } from '@angular/core';
import { UsersManagementService } from '../../shared/services/users-service';
import { FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { User } from 'src/app/model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
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
  private sub: Subscription;
  users: User[];
  isLoading: boolean = false;
  isLoadingUsers: boolean = true;

  constructor(private userService: UsersManagementService, private fb: FormBuilder, private bagService: BagsManagementService) {

  }

  hasError(control: string, error: string) {

    return this.form.controls[control].hasError(error);
  }

  rateValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const num = Number(control.value);
      const isCorrect = num >= 10 && num <= 100;

      return !isCorrect ? { 'rateerror': { value: control.value } } : null;
    };
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.isLoadingUsers = false;
    });
    this.form = this.fb.group({
      name: new FormControl(null,
        [Validators.minLength(4),
        Validators.maxLength(15),
        Validators.required]),
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
          this.userService.modifyUser({ id: this.selectedUser!.id, name, rate }).then(() => {
            this.selectedUser!.name = name;
            this.selectedUser!.rate = rate;
            this.isLoading = false;
          });
        }
      });
  }
}
