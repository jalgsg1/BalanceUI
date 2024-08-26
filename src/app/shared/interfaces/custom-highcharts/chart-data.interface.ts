export interface IPieSeriesData {
  name: string;
  data: { name: string; y: number }[];
}

export interface IBarSeriesData {
  name: string;
  data: number[];
}

export type MixedSeries = IPieSeriesData[] | IBarSeriesData[];

export interface IChartData {
  chartTheme?: string;
  graphicType: string;
  description: string;
  titleText: string;
  subtitleText: string;
  xAxisText: string;
  xAxisCategories: any,
  yAxisText: string;
  countedVariableName: string;
  data: MixedSeries;
}

export interface IChartFIlter {
  initYear: number;
  initMonth: number;
  yearsQuantity: number;
  regime: number;
  category: number;
}
export interface ITableData {
  headers: string[],
  rows: any[];
}

export interface IDropdownData {
  value: number;
  label: string;
}