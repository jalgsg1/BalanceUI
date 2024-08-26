import { IBarSeriesData } from "../../shared/interfaces";

export interface BarSeriesResponse {
  xAxisCategories: string[],
  data: IBarSeriesData[]
}