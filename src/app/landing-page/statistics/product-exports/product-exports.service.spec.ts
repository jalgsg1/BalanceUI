import { TestBed } from '@angular/core/testing';

import { ProductExportsService } from './product-exports.service';

describe('ProductExportsService', () => {
  let service: ProductExportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductExportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
