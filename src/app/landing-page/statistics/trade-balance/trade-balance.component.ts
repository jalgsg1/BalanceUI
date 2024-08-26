import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BarSeriesResponse } from '../../../core/models';
import { GraphicTypes } from '../../../shared/enums/graphic-types.enum';
import {
  IChartData,
  IChartFIlter,
} from '../../../shared/interfaces';
import { TradeBalanceService } from './trade-balance.service';
import { TestMocks } from '../statistics.test.data';

const MONTHS_DATA: string[] = [
  '',
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const regimes: string[] = ['', 'tot','esp', 'def']
@Component({
  selector: 'app-trade-balance',
  templateUrl: './trade-balance.component.html',
  styleUrls: ['./trade-balance.component.scss'],
  providers: [TradeBalanceService, TestMocks],
})
export class TradeBalanceComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];
  public tradeBalanceStatData?: IChartData;
  public hideCategoryFIlter = true;
  public isTradeBalace = true;

  constructor(private tradeBalanceService: TradeBalanceService, private testMocks: TestMocks) {
    this.loadDefault();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  loadDefault() {
    this.loadTradeBalance('tot', 2024, 3, 3);
  }

  loadTradeBalance(regime_type: string, year:number, month:number, num_periods:number) {
    
    // TODO Warning! This is using test data, 
    // To use a real endpoint, configure env variables and connect to a backend.
    // Then delete this 2 test lines and uncomment the next subscribable function.
    const test = this.testMocks.TRADE_BALACE;
    this.buildDefaultData(test, regime_type, month, year)

    /*
    this.subscriptions.push(
      this.tradeBalanceService
        .getTradeBalanceStatistics(regime_type, year, month, num_periods)
        .subscribe((result) => {
          this.buildDefaultData(result, regime_type, month, year)
        })
    );
    */
  }

  // considerar guardar caché
  buildDefaultData(result: BarSeriesResponse, regimeType: String, month: number, year: number) {
    let regimeLabel = '';
    if (regimeType === 'esp') {regimeLabel = 'en régimen especial'};
    if (regimeType === 'def') {regimeLabel = 'en régimen definitivo'};
    const monthName: string = MONTHS_DATA[month];
    const formatDate = (dates: string[]) => (dates ? dates.map((v, i) => `${monthName} ${year - i}`) : []);

    this.tradeBalanceStatData = {
      graphicType: GraphicTypes.column,
      description: 'Gráfico balanza comercial',
      titleText: 'Balanza comercial' + ' ' + regimeLabel,
      subtitleText: `Datos acumulados a ${ monthName } de cada año`,
      xAxisText: 'Productos',
      yAxisText: 'Valor en millones de dólares',
      countedVariableName: 'Millones de dólares',
      xAxisCategories: result?.xAxisCategories ? formatDate(result.xAxisCategories): [],
      data: result.data,
    };
  }

  onFilterSelectionChange(data: IChartFIlter) {
    const selectedRegime: string = regimes[data.regime];
    this.loadTradeBalance(selectedRegime, data.initYear, data.initMonth, data.yearsQuantity)
  }
}


