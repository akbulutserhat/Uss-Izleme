import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalItemComponent } from './hospital-item.component';

describe('HospitalItemComponent', () => {
  let component: HospitalItemComponent;
  let fixture: ComponentFixture<HospitalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
