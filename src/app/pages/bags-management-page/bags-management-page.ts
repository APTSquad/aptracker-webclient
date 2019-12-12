import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatDialogRef,
  MatDialog,
  MatDialogModule,
  MatProgressBarModule
} from '@angular/material';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Bag, User } from 'src/app/model';
import { BagsManagementService } from '../../shared/services/bags-service';
import { BagCreationDialogComponent } from './bag-creation-dialog/bag-creation-dialog.component';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BagCreationDialogModule } from './bag-creation-dialog/bag-creation-dialog.module';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SelectAutocompleteModule } from 'src/app/shared/select-autocomplete/select-autocomplete.module';
import { SelectAutocompleteComponent } from 'src/app/shared/select-autocomplete/select-autocomplete.component';



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

  @ViewChild('autocomplete', { static: true }) autocomplete: SelectAutocompleteComponent;

  private sub: Subscription;

  isLoading: boolean;

  constructor(private service: BagsManagementService, private dialog: MatDialog, private fb: FormBuilder, private http: HttpClient) {

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
          this.service.modifyBag({ id: this.selectedBag!.id, name, responsibleId }).then(res => {
            this.selectedBag!.name = name;
            this.isLoading = false;
          });
        }
        console.log('form changed', val);
      });

  }

  createBagClick() {
    let dialog = this.dialog.open(BagCreationDialogComponent, {
      // hasBackdrop: false
    });

    dialog
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
    this.service.getBags().then(bags => { this.bags = bags; this.isLoadingBags = false; });

    this.form = this.fb.group({
      name: new FormControl(null, [Validators.minLength(4), Validators.maxLength(15), Validators.required]),
      responsibleId: new FormControl(null)
    });

    this.http.get<User[]>('https://localhost:5001/api/users').toPromise().then(users => {
      this.users = users;
    });
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
    BagCreationDialogModule,
    SelectAutocompleteModule,
    NgSelectModule,
    MatProgressBarModule
  ],
  providers: [BagsManagementService],
  exports: [BagsManagementPageComponent],
  declarations: [BagsManagementPageComponent],
  entryComponents: [BagCreationDialogComponent]
})
export class BagsManagementPageModule { }
