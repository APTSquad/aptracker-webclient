import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagCreationDialogComponent } from './bag-creation-dialog.component';

describe('BagCreationDialogComponent', () => {
  let component: BagCreationDialogComponent;
  let fixture: ComponentFixture<BagCreationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagCreationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
