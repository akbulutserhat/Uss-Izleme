import { TestBed } from '@angular/core/testing';

import { YetkiService } from './yetki.service';

describe('YetkiService', () => {
  let service: YetkiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YetkiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
