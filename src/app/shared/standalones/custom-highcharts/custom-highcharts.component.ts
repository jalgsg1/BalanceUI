import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility';
import HC_exporting from 'highcharts/modules/exporting';
import HC_exportData from 'highcharts/modules/export-data';
import patternFill from 'highcharts/modules/pattern-fill';
if (typeof Highcharts === 'object') {
  accessibility(Highcharts);
  HC_exporting(Highcharts);
  HC_exportData(Highcharts);
  patternFill(Highcharts);
}

import { CustomHighchartsTableComponent } from './custom-highcharts-table/custom-highcharts-table.component';
import {
  LightTheme,
  DarkTheme,
  PatternsHandler,
  CustomHighchartsOptions,
} from './custom-highcharts-config';
import { CustomHighchartsConstants } from './custom-highcharts.constants';
import { GraphicTypes } from '../../enums/graphic-types.enum';
import {
  IChartData,
  IChartFIlter,
  IDropdownData,
  ITableData,
} from '../../interfaces';
import { MaterialModule } from '../../material/material.module';
import { ThemeService } from 'src/app/core/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-highcharts',
  standalone: true,
  imports: [
    CommonModule,
    HighchartsChartModule,
    MaterialModule,
    ReactiveFormsModule,
    CustomHighchartsTableComponent,
  ],
  providers: [CustomHighchartsConstants, ThemeService],
  templateUrl: './custom-highcharts.component.html',
  styleUrls: ['./custom-highcharts.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomHighchartsComponent implements OnInit, OnDestroy {
  @Input()
  public set chartData(value: IChartData | undefined) {
    if (value) {
      this._chartData = Object.assign({}, value);
      this.initChartOptions(this._chartData);
      this.setDataToTable(value);
    }
  }
  @Input() hideCategoryFIlter = false;
  @Input() set isTradeBalace(value: boolean) {
      this._isTradeBalance = value;
      this.dynamicAriaLabels.quantityFilter = this._isTradeBalance
        ? this.labels.yearPeriod
        : this.labels.topNProducts;
  }
  @Output() filterSelectionEmitter;

  public isBrowser: boolean;
  public chart: typeof Highcharts = Highcharts;
  public _chartData?: IChartData;
  public chartOptions: Highcharts.Options = {};
  public updateFlag: boolean = false;
  public chartLoaded: boolean = false;
  public includePattern: boolean = false;
  public includeHighConstrast: boolean = false;
  public _isTradeBalance: boolean = true;
  public tableActive: boolean = false;
  public tableData: ITableData;
  public lastAvailableMonth: number;
  public currentYear: number;
  public OLDEST_YEAR: number = 2012;
  public maxYearsCompared: number;

  labels = this.customHighchartsConstants.LABELS;
  public dynamicAriaLabels = {
    highContrastBtn:
      this.labels.showContrast + this.includeHighConstrast
        ? this.labels.active
        : this.labels.inactive,
    patternBtn:
      this.labels.showPatterns + this.includePattern
        ? this.labels.active
        : this.labels.inactive,
    filterOptionsLabel: this._isTradeBalance
      ? this.labels.filterOptsTradeBalance
      : this.labels.filterOptsImportExports,
    quantityFilter: this._isTradeBalance
      ? this.labels.yearPeriod
      : this.labels.topNProducts,
  };

  //@ts-ignore
  filterForm: FormGroup;
  months: IDropdownData[] = this.customHighchartsConstants.MONTHS_DROPDOWN_DATA;
  regimes: IDropdownData[] = [
    { value: 1, label: 'Ambos' },
    { value: 2, label: 'Especial' },
    { value: 3, label: 'Definitivo' },
  ];
  categories: IDropdownData[] = [
    { value: 1, label: 'Producto' },
    { value: 2, label: 'País' },
  ];
  themeSuscription?: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private customHighchartsConstants: CustomHighchartsConstants,
    @Inject(PLATFORM_ID) platformId: Object,
    private themeService: ThemeService,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.filterSelectionEmitter = new EventEmitter<IChartFIlter>();
    const newDate = new Date();
    newDate.setMonth(newDate.getMonth() - 1);
    this.currentYear = newDate.getFullYear();
    this.lastAvailableMonth = newDate.getMonth();
    this.maxYearsCompared = 8; // this.currentYear - this.OLDEST_YEAR;

    this.tableData = {
      headers: [],
      rows: [],
    };
  }

  ngOnInit(): void {
    this.createForm();

    this.themeSuscription = this.themeService.isDark$.subscribe(isDark => {
      this.changeTheme(isDark);
    });
  }

  ngOnDestroy(): void {
    this.themeSuscription?.unsubscribe()
  }

  initChartOptions(newChartData: IChartData) {
    const customHighchartsOptions = new CustomHighchartsOptions(newChartData);
    const baseConfig = customHighchartsOptions.getBaseConfig();
    this.chartOptions = Object.assign({}, baseConfig);
    this.chartOptions = this.includeHighConstrast
      ? new DarkTheme().getTheme(this.chartOptions)
      : (this.chartOptions = new LightTheme().getTheme(this.chartOptions));
    this.chart.setOptions(this.chartOptions);

    // updateQuantityFilterLabel(event: any)

    this.chartLoaded = true;
    this.updateFlag = true;
  }

  setDataToTable(value: IChartData) {
    if (value) {
      const isPieDataFormat = value.graphicType == GraphicTypes.pie;
      let seriesData = value.data;

      const headers = [value.xAxisText];
      for (let index = 0; index < seriesData.length; index++) {
        const item = seriesData[index];
        if (item.data) {
          headers.push(item.name);
        }
      }

      const categoryRows = value.xAxisCategories;

      let rows = [];
      for (let index = 0; index < categoryRows.length; index++) {
        const col = categoryRows[index];
        const row = [col];
        for (const numValue of seriesData) {
          if (isPieDataFormat) {
            //@ts-ignore
            row.push(numValue.data[index].y);
          } else {
            row.push(numValue.data[index]);
          }
        }
        rows.push(row);
      }

      this.tableData = {
        headers: headers,
        rows: rows,
      };
    }
  }

  setPatterns() {
    this.includePattern = !this.includePattern;
    if (this.includePattern) {
      this.chartOptions.colors = new PatternsHandler().getColorPatterns();
    } else {
      this.chartOptions = this.includeHighConstrast
        ? new DarkTheme().getTheme(this.chartOptions)
        : (this.chartOptions = new LightTheme().getTheme(this.chartOptions));
    }

    this.updateChart(this.chartOptions);
  }

  changeTheme(value?: boolean) {
    this.includeHighConstrast = !this.includeHighConstrast;
    if(value) {
      this.includeHighConstrast = value;
    }
    this.chartOptions = this.includeHighConstrast
    ? new DarkTheme().getTheme(this.chartOptions)
    : new LightTheme().getTheme(this.chartOptions);

    if (this.includePattern)
      this.chartOptions.colors = new PatternsHandler().getColorPatterns();

    this.updateChart(this.chartOptions);
  }

  updateChart(chartOptions: Highcharts.Options) {
    this.chartOptions = Object.assign({}, chartOptions);
    this.chart.setOptions(chartOptions);
    this.updateFlag = true;
  }

  // -------------- Form --------------
  createForm(): void {
    this.filterForm = this.formBuilder.group({
      initYear: [this.currentYear, [Validators.required, Validators.max(2024)]],
      initMonth: [this.lastAvailableMonth, Validators.required],
      yearsQuantity: [3, [Validators.max(this.currentYear - this.OLDEST_YEAR)]],
      regime: [1, Validators.required],
      category: [1, Validators.required],
    });
  }

  onYearInitChange(event: any) {
    const unexistentMonth =
      event.target.value == this.currentYear &&
      this.filterForm.get('initMonth')?.getRawValue() > this.lastAvailableMonth;
    if (!event.target.value || unexistentMonth) {
      this.filterForm.get('initMonth')?.setValue(this.lastAvailableMonth);
    }
  }
  afterYearChanges(event: any) {
    const unexistentYear =
      isNaN(event.target.value) ||
      event.target.value > this.currentYear ||
      event.target.value < this.OLDEST_YEAR;
    if (!event.target.value || unexistentYear) {
      this.filterForm.get('initYear')?.setValue(this.currentYear);
    }
  }

  onChangeInitMonth(event: any) {
    const selectedMonth: number = +event.target.value;
    this.filterForm.get('initMonth')?.setValue(selectedMonth);
  }

  validateYearPeriod(event: any) {
    const invalidNumber =
      isNaN(event.target.value) ||
      event.target.value < 1 ||
      event.target.value > this.maxYearsCompared;
    if (!event.target.value || invalidNumber) {
      this.filterForm.get('yearsQuantity')?.setValue(3);
    }
  }

  updateQuantityFilterLabel(event: any) {
    const isProduct = event.target.value == '1';
    this.dynamicAriaLabels.quantityFilter = isProduct
      ? this.labels.topNProducts
      : this.labels.topNCountries;
  }

  onSubmit(): void {
    this.chartLoaded = false;
    this.filterSelectionEmitter.emit(this.filterForm.value);
  }
}
