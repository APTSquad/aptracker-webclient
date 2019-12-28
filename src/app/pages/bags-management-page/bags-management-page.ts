import { Component, OnInit, Input } from '@angular/core';
import {
  MatDialog
} from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Bag } from 'src/app/model';
import { BagsManagementService } from '../../shared/services/bags-service';
import { BagCreationDialogComponent } from './bag-creation-dialog/bag-creation-dialog.component';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UsersManagementService } from 'src/app/shared/services/users-service';



@Component({
  selector: 'app-bags-management-page',
  templateUrl: './bags-management-page.html',
  styleUrls: ['./bags-management-page.scss'],
})
export class BagsManagementPageComponent implements OnInit {
  myControl = new FormControl();
  selectedBag: Bag | null = null;
  form: FormGroup;
  users: any;
  isLoadingBags: boolean = true;
  bags: Bag[];
  private sub: Subscription;
  isLoading: boolean;

  id:number;
  private subBag:any;

  // tslint:disable-next-line:max-line-length
  constructor(private bagService: BagsManagementService, private userService: UsersManagementService, private dialog: MatDialog, private fb: FormBuilder) {

  }

  onBagSelected(bag: any) {
    this.selectedBag = bag;
    if (this.sub) {
      this.sub.unsubscribe();
    }

    this.form.controls['name'].setValue(bag.name);
    if (bag.responsible) {
      this.form.controls['responsibleId'].setValue(bag.responsible.id);
    } else {
      this.form.controls['responsibleId'].setValue(null);
    }

    this.sub = this.form.valueChanges.pipe(debounceTime(500)).pipe(distinctUntilChanged())
      .subscribe(val => {
        if (this.form.status == 'VALID') {
          const name = val.name;
          const responsibleId = val.responsibleId;

          this.isLoading = true;
          this.bagService.modifyBag({ id: this.selectedBag!.id, name, responsibleId })
            // tslint:disable-next-line:no-shadowed-variable
            .subscribe((bag: Bag) => {
              this.selectedBag!.name = name;
              this.selectedBag!.responsible = bag.responsible;
              this.isLoading = false;
            });
        }
      });


  }

  createBagClick() {
    let dialog = this.dialog.open(BagCreationDialogComponent);

    dialog
      .afterClosed()
      .filter(data => data != null)
      .subscribe(data => {
        this.bagService.createBag(data).subscribe(result => {
          this.bags.push(result);
        });
      });
  }

  ngOnInit(): void {
    this.bagService.getBags().subscribe(bags => { this.bags = bags; this.isLoadingBags = false; });
    this.form = this.fb.group({
      name: new FormControl(null,
        [
          Validators.minLength(4),
          Validators.maxLength(15),
          Validators.required
        ]),
      responsibleId: new FormControl(null)
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }



}
