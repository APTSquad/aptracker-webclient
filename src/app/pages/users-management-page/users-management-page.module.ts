import { NgModule } from '@angular/core';
import { MatIconModule, MatListModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatButtonModule, MatSidenavModule, MatRippleModule, MatAutocompleteModule, MatProgressBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectionDialogModule } from 'src/app/shared/selection-dialog/selection-dialog.module';
import { NgxMaskModule } from 'ngx-mask';
import { TextMaskModule } from 'angular2-text-mask';
import { UsersManagementService } from 'src/app/shared/services/users-service';
import { UsersManagementPageComponent } from './users-management-page';
import { FilterPipe, FilterPipeModule } from 'src/app/shared/pipes/filter.pipe';

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
        TextMaskModule,
        FilterPipeModule
    ],
    providers: [UsersManagementService],
    exports: [UsersManagementPageComponent],
    declarations: [UsersManagementPageComponent],
})
export class UsersManagementPageModule { }
