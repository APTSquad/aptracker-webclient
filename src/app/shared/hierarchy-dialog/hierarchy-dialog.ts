import { Component, Inject, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatRippleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'hierarchy-dialog',
    templateUrl: 'hierarchy-dialog.html',
})
export class HierarchyDialogComponent {

    filterValue: string;
    constructor(
        public dialogRef: MatDialogRef<HierarchyDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { header: string, recommended: any, items: any }) {
    }

    doLog(s: string) {
        console.log(s);
    }
}


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
        MatListModule
    ],
    exports: [HierarchyDialogComponent],
    providers: [],
    declarations: [HierarchyDialogComponent],
    entryComponents: [HierarchyDialogComponent]
})
export class HierarchyDialogModule { }