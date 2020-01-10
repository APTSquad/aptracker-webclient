import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Bag } from 'src/app/model';
import { BagsManagementService } from 'src/app/shared/services/bags-service';

@Component({
    selector: 'article-creation-dialog',
    templateUrl: 'article-creation-dialog.html',
})
export class ArticleCreationDialog implements OnInit {
    form: FormGroup;
    bags: Bag[];

    controlHasErrors(controlName: string): boolean {
        return Boolean(this.form.controls[controlName].errors);
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            name: new FormControl('',
                [
                    Validators.required,
                    Validators.minLength(5),
                    Validators.maxLength(20)
                ]
            ),
            ProjectId: new FormControl(this.data.project.id)
            // bagId: new FormControl(null, Validators.required),
        });
        /*this.bagService.getBags().subscribe(bags => {
            this.bags = bags;
        });*/

        // this.form.valueChanges.subscribe(value => {
        //     console.log('value', value);
        //     console.log('state', this.form.status);
        // });
    }

    constructor(
        public dialogRef: MatDialogRef<ArticleCreationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        // private bagService: BagsManagementService
    ) {


    }

    onNoClick(): void {
        this.dialogRef.close();
      }
    

    submit(): void {
        this.dialogRef.close(this.form.value);
    }
}
