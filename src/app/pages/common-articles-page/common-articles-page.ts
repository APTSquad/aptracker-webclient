import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/model';
import { Subscription } from 'rxjs';
import { ArticlesManagementService } from 'src/app/shared/services/articles-service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { BagCreationDialogComponent } from '../bags-management-page/bag-creation-dialog/bag-creation-dialog.component';
import { ArticleCreationDialogComponent } from './article-creation-dialog/article-creation-dialog.component';


@Component({
  selector: 'app-common-articles-page',
  templateUrl: './common-articles-page.html',
  styleUrls: ['./common-articles-page.scss'],
})
export class CommonArticlesPageComponent implements OnInit {
  form: FormGroup;
  myControl = new FormControl();
  selected: any;
  sub: Subscription;
  articles: Article[];
  isLoading: boolean = false;
  isLoadingArticles: boolean = true;
  searchQuery: any;

  constructor(private fb: FormBuilder, private service: ArticlesManagementService,
    private dialog: MatDialog) {

  }

  hasError(control: string, error: string) {
    return this.form.controls[control].hasError(error);
  }

  ngOnInit(): void {
    this.service.getCommon().subscribe(articles => {
      this.articles = articles;
      this.isLoadingArticles = false;
    });
    this.form = this.fb.group({
      name: new FormControl(null,
        [Validators.minLength(4),
        Validators.maxLength(15),
        Validators.required]
      ),
      isActive: new FormControl(null,
        [Validators.required]
      )
    });
  }

  controlHasErrors(controlName: string): boolean {
    return Boolean(this.form.controls[controlName].errors);
  }

  createArticleClick() {
    let dialog = this.dialog.open(ArticleCreationDialogComponent);

    dialog
      .afterClosed()
      .filter(data => data != null)
      .subscribe(data => {
        data.isCommon = true;
        data.isActive = true;
        this.service.createCommon(data).subscribe(result => {
          this.articles.push(result);
        });
      });
  }

  onArticleSelected(article: any) {
    this.selected = article;
    if (this.sub) {
      this.sub.unsubscribe();
    }

    this.form.controls['name'].setValue(article.name);
    this.form.controls['isActive'].setValue(article.isActive);

    this.sub = this.form.valueChanges.pipe(debounceTime(500)).pipe(distinctUntilChanged())
      .subscribe(val => {
        if (this.form.status == 'VALID') {
          this.isLoading = true;
          const name = val.name;
          const isActive = val.isActive;
          this.service.modifyArticle({ id: this.selected!.id, isActive, name }).subscribe(() => {
            this.selected!.name = name;
            this.isLoading = false;
            this.selected!.isActive = isActive;
          });
        }
      });
  }
}
