import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'selection-dialog',
    templateUrl: 'selection-dialog.component.html',
})
export class SelectionDialogComponent {

    filterValue: string;
    constructor(
        public dialogRef: MatDialogRef<SelectionDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { header: string, items: any, getFunc: any }) {
    }

    submit() {
        this.dialogRef.close(this.data.items.filter((item: any) => item.checked).map((item: any) => item.id));
    }
}


