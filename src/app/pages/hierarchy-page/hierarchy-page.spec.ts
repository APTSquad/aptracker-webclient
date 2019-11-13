import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyPageComponent } from './hierarchy-page';
import {
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClientListPageComponent', () => {
  let component: HierarchyPageComponent;
  let fixture: ComponentFixture<HierarchyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatIconModule,
        BrowserAnimationsModule
      ],
      declarations: [HierarchyPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
