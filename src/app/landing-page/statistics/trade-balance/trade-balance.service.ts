import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { BarSeriesResponse } from '../../../core/models';
import { SharedService } from '../../../shared/services/shared/shared.service';

@Injectable({
  providedIn: 'root',
})
export class TradeBalanceService extends SharedService {
  private tradeBalanceURL: string = `${this.API_ENDPOINT}statistics/tradebalance`;

  constructor(private readonly httpClient: HttpClient) {
    super();
  }

  // /statistics/tradebalance/{regime_type}/{year}/{month}/{num_periods}  
  getTradeBalanceStatistics(regime_type: string, year:number, month:number, num_periods:number): Observable<BarSeriesResponse> {
    const options = { headers: this.httpHeaders }
    const tradeURL = `${this.tradeBalanceURL}/${regime_type}/${year}/${month}/${num_periods}`
    return this.httpClient.get<BarSeriesResponse>(tradeURL, options)
      .pipe(
        catchError(this.handleError<any>('getTradeBalanceStatistics'))
    );
  }

}
