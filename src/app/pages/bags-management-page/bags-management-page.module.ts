import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import {
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCardModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BagCreationDialogModule } from './bag-creation-dialog/bag-creation-dialog.module';
// tslint:disable-next-line:max-line-length
import { SelectAutocompleteModule } from 'src/app/shared/select-autocomplete/select-autocomplete.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { BagsManagementService } from 'src/app/shared/services/bags-service';
import { BagsManagementPageComponent } from './bags-management-page';
import { BagCreationDialogComponent } from './bag-creation-dialog/bag-creation-dialog.component';
import { RouterModule } from '@angular/router';
import { FilterPipeModule } from 'src/app/shared/pipes/filter.pipe';


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
        MatListModule,
        MatCardModule,
        FlexLayoutModule,
        FormsModule,
        BagCreationDialogModule,
        SelectAutocompleteModule,
        NgSelectModule,
        MatProgressBarModule,
        RouterModule,
        FilterPipeModule
    ],
    providers: [BagsManagementService],
    exports: [BagsManagementPageComponent],
    declarations: [BagsManagementPageComponent],
    entryComponents: [BagCreationDialogComponent]
})
export class BagsManagementPageModule { }
