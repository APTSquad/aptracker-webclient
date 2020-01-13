import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCreationDialogComponent } from './article-creation-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatRippleModule } from '@angular/material';


@NgModule({
  declarations: [ArticleCreationDialogComponent],
  exports: [ArticleCreationDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
  ],
  entryComponents: [ArticleCreationDialogComponent]
})
export class ArticleCreationDialogModule { }
