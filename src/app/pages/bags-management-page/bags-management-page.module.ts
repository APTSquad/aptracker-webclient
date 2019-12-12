import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatInputModule, MatButtonModule, MatSidenavModule, MatDialogModule, MatFormFieldModule, MatProgressBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BagCreationDialogModule } from './bag-creation-dialog/bag-creation-dialog.module';
import { SelectAutocompleteModule } from 'src/app/shared/select-autocomplete/select-autocomplete.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { BagsManagementService } from 'src/app/shared/services/bags-service';
import { BagsManagementPageComponent } from './bags-management-page';
import { BagCreationDialogComponent } from './bag-creation-dialog/bag-creation-dialog.component';

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
