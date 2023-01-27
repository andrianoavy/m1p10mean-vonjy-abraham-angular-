import { TestBed } from '@angular/core/testing';

import { StatistiqueFinanceService } from './statistique-finance.service';

describe('StatistiqueFinanceService', () => {
  let service: StatistiqueFinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatistiqueFinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
