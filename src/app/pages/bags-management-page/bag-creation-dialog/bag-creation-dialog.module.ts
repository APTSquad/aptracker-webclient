import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagCreationDialogComponent } from './bag-creation-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatRippleModule, MatAutocompleteModule } from '@angular/material';
import { SelectAutocompleteModule } from 'src/app/shared/select-autocomplete/select-autocomplete.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [BagCreationDialogComponent],
  exports: [BagCreationDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    SelectAutocompleteModule,
    NgSelectModule
  ],
  entryComponents: [BagCreationDialogComponent]
})
export class BagCreationDialogModule { }
