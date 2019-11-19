import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersManagementPageComponent } from './bags-management-page';
import {
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClientListPageComponent', () => {
  let component: UsersManagementPageComponent;
  let fixture: ComponentFixture<UsersManagementPageComponent>;

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
      declarations: [UsersManagementPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
