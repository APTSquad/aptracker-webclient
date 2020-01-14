import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'transfer-dialog',
    templateUrl: 'transfer-dialog.html',
})
export class TransferDialog implements OnInit {
    form: FormGroup;

    controlHasErrors(controlName: string): boolean {
        return Boolean(this.form.controls[controlName].errors);
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            selectedId: new FormControl(null,
                [Validators.required]
            ),
        });
        console.log(this.data);
    }

    constructor(
        public dialogRef: MatDialogRef<TransferDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
    ) {

    }

    submit(): void {
        this.dialogRef.close(this.form.value);
    }
}
