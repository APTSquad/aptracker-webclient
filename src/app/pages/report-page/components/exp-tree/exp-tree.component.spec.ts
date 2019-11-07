import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTreeComponent } from './exp-tree';

describe('ExpTreeComponent', () => {
  let component: ExpTreeComponent;
  let fixture: ComponentFixture<ExpTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpTreeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
