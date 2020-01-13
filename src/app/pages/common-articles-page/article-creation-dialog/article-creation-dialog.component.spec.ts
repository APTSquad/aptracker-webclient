import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCreationDialogComponent } from './article-creation-dialog.component';

describe('BagCreationDialogComponent', () => {
  let component: ArticleCreationDialogComponent;
  let fixture: ComponentFixture<ArticleCreationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleCreationDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
