import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciTanimlamaComponent } from './kullanici-tanimlama.component';

describe('KullaniciTanimlamaComponent', () => {
  let component: KullaniciTanimlamaComponent;
  let fixture: ComponentFixture<KullaniciTanimlamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KullaniciTanimlamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciTanimlamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
