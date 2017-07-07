import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgDtlComponent } from './bolg-dtl.component';

describe('BolgDtlComponent', () => {
  let component: BolgDtlComponent;
  let fixture: ComponentFixture<BolgDtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolgDtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolgDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
