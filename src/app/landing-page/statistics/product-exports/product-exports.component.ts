import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PieSeriesResponse } from '../../../core/models';
import { GraphicTypes } from '../../../shared/enums/graphic-types.enum';
import {
  IChartData,
  IChartFIlter,
  IPieSeriesData,
} from '../../../shared/interfaces';
import { ProductExportsService } from './product-exports.service';
import { TestMocks } from '../statistics.test.data';

const regimes: string[] = ['', 'tot','esp', 'def']
const categories: string[] = ['', 'producto', 'pais']

@Component({
  selector: 'app-product-exports',
  templateUrl: './product-exports.component.html',
  styleUrls: ['./product-exports.component.scss'],
  providers: [TestMocks]
})
export class ProductExportsComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];
  public exportsStatData?: IChartData;
  public isTradeBalace = false

  constructor(private productExportsService: ProductExportsService, private testMocks: TestMocks) {
    this.loadDefault();
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  loadDefault() {
    this.loadExports('tot', 'producto', 2024, 3, 3);
  }

  loadExports(regime_type: string, category_type: string, year:number, month:number, num_periods:number) {

    // TODO Warning! This is using test data, 
    // To use a real endpoint, configure env variables and connect to a backend.
    // Then delete this 2 test lines and uncomment the next subscribable function.
    const test = this.testMocks.EXPORTS;
    this.buildDefaultData(test, category_type, num_periods);
    
    /*
    this.subscriptions.push(
      this.productExportsService.getExportStatistics(regime_type, category_type, year, month, num_periods)
        .subscribe((result) => {
          this.buildDefaultData(result, category_type, num_periods);
        })
    );
    */
  }

  // considerar guardar caché
  buildDefaultData(result: PieSeriesResponse, category_type: string, num_periods:number) {
    const isProduct = category_type == 'producto';
    const labelTitleText = isProduct ? 'Exportaciones por producto': 'Exportaciones por país';
    const labelXAxis = isProduct ? 'Productos': 'Países';
    const data: { name: string; y: number }[] = result.data ? result.data.map( d => ({name: d.name, y: d.value}) ) : [];
    const formatedData: IPieSeriesData[] =[
      {
        name: 'Exportación',
        data: data
      },
    ]

    this.exportsStatData = {
      graphicType: GraphicTypes.pie,
      description: 'Gráfico importaciones más importantes',
      titleText: labelTitleText,
      subtitleText: `Los ${num_periods} productos más importantes`,
      xAxisCategories: result ? result.data.map(c => c.name): [],
      xAxisText: labelXAxis,
      yAxisText: 'Valor en millones de dólares',
      countedVariableName: 'Millones de dólares',
      data: formatedData
    };
  }

  onFilterSelectionChange(data: IChartFIlter) {
    const selectedRegime: string = regimes[data.regime];
    const selectedCategorie: string = categories[data.category];
    this.loadExports(selectedRegime, selectedCategorie, data.initYear, data.initMonth, data.yearsQuantity)
  }
}



/**
 * 
 
  tradeBalanceStatData: any;
  categories = [
    'Maiz',
    'Frijol',
    'Fresco',
    'Arroz',
    'Papa',
    'Chips'
  ];

  data: IPieSeriesData[] = [
		{
			name: 'Exportación', // | paises
      data: [ 
        { name: 'Maiz', y: 1020 },{ name: 'Otros', y: 4000 },{ name: 'Fresco', y: 2040 },
        { name: 'Arroz', y: 2020 },{ name: 'Piña', y: 2040 }, { name: 'Chips', y: 1520 }
      ]
  	},
	]

 */