import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SelectAutocompleteComponent } from './select-autocomplete.component';


@NgModule({
  declarations: [SelectAutocompleteComponent],
  exports: [SelectAutocompleteComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    NgxMatSelectSearchModule
  ]
})
export class SelectAutocompleteModule { }
