import { TestBed } from '@angular/core/testing';

import { TradeBalanceService } from './trade-balance.service';

describe('TradeBalanceService', () => {
  let service: TradeBalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeBalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
