import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgListComponent } from './bolg-list.component';

describe('BolgListComponent', () => {
  let component: BolgListComponent;
  let fixture: ComponentFixture<BolgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
