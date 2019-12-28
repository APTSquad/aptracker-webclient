import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagmangementComponent  } from './bag-management';

describe('ProfilComponent', () => {
  let component: BagmangementComponent ;
  let fixture: ComponentFixture<BagmangementComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagmangementComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagmangementComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
