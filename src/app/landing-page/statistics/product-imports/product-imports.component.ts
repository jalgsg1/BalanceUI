import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PieSeriesResponse } from '../../../core/models';
import { GraphicTypes } from '../../../shared/enums/graphic-types.enum';
import {
  IChartData,
  IChartFIlter,
  IPieSeriesData,
} from '../../../shared/interfaces';
import { ProductImportsService } from './product-imports.service';
import { TestMocks } from '../statistics.test.data';

const regimes: string[] = ['', 'tot','esp', 'def']
const categories: string[] = ['', 'producto', 'pais']
@Component({
  selector: 'app-product-imports',
  templateUrl: './product-imports.component.html',
  styleUrls: ['./product-imports.component.scss'],
  providers: [TestMocks]
})
export class ProductImportsComponent implements OnDestroy {
  private subscriptions: Subscription[] = [];
  public importsStatData?: IChartData;
  public isTradeBalace = false;

  constructor(private productImportsService: ProductImportsService, private testMocks: TestMocks) {
    this.loadDefault();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  loadDefault() {
    this.loadImports('tot', 'producto', 2024, 3, 3);
  }

  loadImports(regime_type: string, category_type: string, year:number, month:number, num_periods:number) {

    // TODO Warning! This is using test data, 
    // To use a real endpoint, configure env variables and connect to a backend.
    // Then delete this 2 test lines and uncomment the next subscribable function.
    const test = this.testMocks.IMPORTS;
    this.buildDefaultData(test, category_type, num_periods);
    
    /*
    this.subscriptions.push(
      this.productImportsService.getImportStatistics(regime_type, category_type, year, month, num_periods)
        .subscribe((result) => { 
          this.buildDefaultData(result, category_type, num_periods)
        })
    );
    */
  }

  // considerar guardar caché
  buildDefaultData(result: PieSeriesResponse, category_type: string, num_periods:number) {
    const isProduct = category_type == 'producto';
    const labelTitleText = isProduct ? 'Importaciones por producto': 'Importaciones por país';
    const labelXAxis = isProduct ? 'Productos': 'Países';
    const data: { name: string; y: number }[] = result.data ? result.data.map( d => ({name: d.name, y: d.value}) ) : [];
    const formatedData: IPieSeriesData[] =[
      {
        name: 'Importación',
        data: data
      },
    ]

    const subtitleText: string = num_periods > 1 ?  `Los ${num_periods} productos más importantes`: `El producto más importante`;

    this.importsStatData = {
      graphicType: GraphicTypes.pie,
      description: 'Gráfico importaciones más importantes',
      titleText: labelTitleText,
      subtitleText: subtitleText,
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

    this.loadImports(selectedRegime, selectedCategorie, data.initYear, data.initMonth, data.yearsQuantity)
  }
}


/*

  ImportsStatData: any;
  categories = [
    'Maiz',
    'Frijol',
    'Fresco',
    'Arroz',
    'Papa',
    'Chips'
  ]
  data: IPieSeriesData[] = [
		{
			name: 'Importación',
      data: [ 
        { name: 'Maiz', y: 1000 },{ name: 'Frijol', y: 1500 },{ name: 'Piña', y: 3200 },
        { name: 'Café', y: 2500 },{ name: 'Papa', y: 2300 }, { name: 'Chips', y: 2000 }
      ]
  	},
	]

*/