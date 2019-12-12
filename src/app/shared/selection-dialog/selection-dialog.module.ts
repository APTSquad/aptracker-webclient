import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatDialogModule, MatListModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SelectionDialogComponent } from './selection-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MatRippleModule,
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        FlexLayoutModule,
        MatListModule,
        MatCheckboxModule
    ],
    exports: [SelectionDialogComponent],
    providers: [],
    declarations: [SelectionDialogComponent],
    entryComponents: [SelectionDialogComponent]
})
export class SelectionDialogModule { }