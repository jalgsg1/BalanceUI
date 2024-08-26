import { TestBed } from '@angular/core/testing';

import { ProductImportsService } from './product-imports.service';

describe('ProductImportsService', () => {
  let service: ProductImportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductImportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
