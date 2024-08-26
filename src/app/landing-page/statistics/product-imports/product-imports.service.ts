import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { PieSeriesResponse } from '../../../core/models';
import { SharedService } from '../../../shared/services/shared/shared.service';

@Injectable({
  providedIn: 'root',
})
export class ProductImportsService extends SharedService {
  private importsURL: string = `${this.API_ENDPOINT}statistics/imports`;

  constructor(private readonly httpClient: HttpClient) {
    super();
  }
 
  getImportStatistics(regime_type: string, category_type: string, year:number, month:number, num_periods:number): Observable<PieSeriesResponse> {
    const options = { headers: this.httpHeaders }
    const tradeURL = `${this.importsURL}/${regime_type}/${category_type}/${year}/${month}/${num_periods}`
    return this.httpClient.get<PieSeriesResponse>(tradeURL, options)
      .pipe(
        catchError(this.handleError<any>('getImportsStatistics'))
      );
  }

}
