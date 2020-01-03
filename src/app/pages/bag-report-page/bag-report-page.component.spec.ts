import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagReportPageComponent } from './bag-report-page.component';

describe('BagReportPageComponent', () => {
  let component: BagReportPageComponent;
  let fixture: ComponentFixture<BagReportPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagReportPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagReportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
