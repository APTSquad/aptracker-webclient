import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListPageComponent } from './client-list-page';
import {
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClientListPageComponent', () => {
  let component: ClientListPageComponent;
  let fixture: ComponentFixture<ClientListPageComponent>;

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
      declarations: [ClientListPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
