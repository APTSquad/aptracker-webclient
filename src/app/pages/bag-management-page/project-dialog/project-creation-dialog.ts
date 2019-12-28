import { Component, Inject, OnInit, ViewChild } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionList, MatSelectionListChange } from '@angular/material';
@Component({
    selector: 'project-creation-dialog',
    templateUrl: 'project-creation-dialog.html',
})
export class ProjectCreationDialog implements OnInit {
    selectedObj: any;

    @ViewChild(MatSelectionList, {static: true}) list: MatSelectionList;


    ngOnInit(): void {
        this.data.projects = this.data.projects.filter((x: any) => {
            if (x.bag) {
                return x.bag.id != this.data.bagId;
            } else {
                return true;
            }
        });


            this.list.selectionChange.subscribe((s: MatSelectionListChange) => {
                this.list.deselectAll();
                s.option.selected = true;
            });


    }

    constructor(
        public dialogRef: MatDialogRef<ProjectCreationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {


    }

    onNgModelChange($event: any) {
        this.selectedObj = $event;
        console.log(this.selectedObj);
      }

    submit(): void {
        this.dialogRef.close(this.selectedObj[0]);
    }
}
