export class DarkTheme {
  constructor() {}
  seriesColors = [
    '#c4244b',
    '#198382',
    '#6a434d',
    '#026729',
    '#5d0e22',
    '#5257ad',
    '#d83d3d',
    '#1a1f76',
    '#a2653e',
    '#063b3a',
    '#53207e',
    '#0a6681',
    '#800e0e',
    '#c45b00',
    '#637211',
    '#532e16',
    '#2a5188',
    '#5c5c5c',
  ];
  private textColors = '#FCFCFC';
  private lineColors = '#707073';
  private boxFillColor = '#505053';
  private itemHover = 'white';
  private chartBg = '#303030';

  getTheme(options: any) {
    options.colors = this.seriesColors;
    options.chart.backgroundColor = this.chartBg;
    options.title.style.color = this.textColors;
    options.subtitle.style.color = this.textColors;

    options.xAxis.gridLineColor = this.lineColors;
    options.xAxis.lineColor = this.lineColors;
    options.xAxis.tickColor = this.lineColors;
    options.xAxis.labels.style.color = this.textColors;
    options.xAxis.title.style.color = this.textColors;
    options.xAxis.minorGridLineColor = this.boxFillColor;
    options.yAxis.gridLineColor = this.lineColors;
    options.yAxis.lineColor = this.lineColors;
    options.yAxis.tickColor = this.lineColors;
    options.yAxis.labels.style.color = this.textColors;
    options.yAxis.title.style.color = this.textColors;
    options.yAxis.minorGridLineColor = this.boxFillColor;
    options.tooltip.backgroundColor = 'rgba(0, 0, 0, 0.90)';
    options.tooltip.style.color = this.textColors;
    options.tooltip.borderColor = this.itemHover;

    options.plotOptions.series.dataLabels.color = this.textColors;
    options.plotOptions.series.marker.lineColor = this.itemHover;

    options.legend.itemStyle.color = this.textColors;
    //options.legend.itemHoverStyle.color = this.itemHover;
 
    options.navigation.buttonOptions.theme.fill = this.chartBg;

    return options;
  }
}
