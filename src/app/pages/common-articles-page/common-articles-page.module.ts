import { NgModule } from '@angular/core';
import { MatIconModule, MatListModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatInputModule, MatButtonModule, MatSidenavModule, MatRippleModule, MatAutocompleteModule, MatProgressBarModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectionDialogModule } from 'src/app/shared/selection-dialog/selection-dialog.module';
import { TextMaskModule } from 'angular2-text-mask';
import { FilterPipeModule } from 'src/app/shared/pipes/filter.pipe';
import { CommonArticlesPageComponent } from './common-articles-page';
import { ArticleCreationDialogComponent } from './article-creation-dialog/article-creation-dialog.component';

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
        TextMaskModule,
        FilterPipeModule,
        MatCheckboxModule
    ],
    providers: [],
    exports: [CommonArticlesPageComponent],
    declarations: [CommonArticlesPageComponent],
    entryComponents: [ArticleCreationDialogComponent]
})
export class CommonArticlesPageModule { }
