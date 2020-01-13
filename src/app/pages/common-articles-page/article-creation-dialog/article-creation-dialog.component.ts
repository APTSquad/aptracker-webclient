import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-article-creation-dialog',
  templateUrl: './article-creation-dialog.component.html',
  styleUrls: ['./article-creation-dialog.component.scss']
})
export class ArticleCreationDialogComponent implements OnInit {


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl()
    });
  }
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ArticleCreationDialogComponent>) {

  }

  submit(form: any) {
    this.dialogRef.close(form.value);
  }

}
