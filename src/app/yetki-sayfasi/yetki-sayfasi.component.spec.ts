import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YetkiSayfasiComponent } from './yetki-sayfasi.component';

describe('YetkiSayfasiComponent', () => {
  let component: YetkiSayfasiComponent;
  let fixture: ComponentFixture<YetkiSayfasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YetkiSayfasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YetkiSayfasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
