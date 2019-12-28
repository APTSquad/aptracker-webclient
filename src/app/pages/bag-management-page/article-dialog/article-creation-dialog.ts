import { Component, Inject, OnInit, ViewChild } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionList, MatSelectionListChange } from '@angular/material';
@Component({
    selector: 'article-creation-dialog',
    templateUrl: 'article-creation-dialog.html',
})
export class ArticleCreationDialog implements OnInit {

    selectedObj: any;
    articles = this.data.articles;

    @ViewChild(MatSelectionList, {static: true}) list: MatSelectionList;

    ngOnInit(): void {

        this.articles = this.articles.filter((x: any) => {
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
        public dialogRef: MatDialogRef<ArticleCreationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    onNgModelChange($event: any) {
        this.selectedObj = $event;
        console.log(this.selectedObj);
    }

    ngAfterContentInit() {

    }

    submit(): void {
        this.dialogRef.close(this.selectedObj[0]);
    }
}
