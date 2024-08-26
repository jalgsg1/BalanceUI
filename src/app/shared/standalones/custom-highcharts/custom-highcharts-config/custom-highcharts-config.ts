import { IChartData } from '../../../interfaces/custom-highcharts/chart-data.interface';
import { CHART_LANG } from './chart-lang';

export class CustomHighchartsOptions {
  
  constructor(private initData: IChartData) {}

  langOptions = CHART_LANG
  private seriesColors: string[] = [
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
  private textStyleColor: string = '#333333';


  public getBaseConfig() {
    return this.generateChartOptions(this.initData);
  }

  private generateChartOptions(options: IChartData): any {
    return {
      colors: this.seriesColors,
      chart: {
        type: options.graphicType,
        backgroundColor: 'white',
      },
      lang: this.langOptions,
      title: {
        text: options.titleText,
        style: {
          fontSize: '18px',
          color:this.textStyleColor,
        },
      },
      subtitle: {
        text: options.subtitleText,
        style: {
          fontSize: '15px',
          color: '#666666'
        },
      },
      credits: {
        enabled: false,
      },
      legend: {
        symbolHeight: 20,
        margin: 10,
        itemMarginBottom: 10,
        itemStyle: {
          color: '#505050',
          fontSize:'14px',
        },
      },
      accessibility: {
        enabled: true,
        // series: {
        //   describeSingleSeries: true,
        // },
        keyboardNavigation: {
          enabled: true
        },
        description: options.description,
      },
      xAxis: {
        gridLineColor: '#ccc',
        lineColor: '',
        tickColor: '',
        labels: {
          style: { 
            color: this.textStyleColor,
            fontSize: '14px'
          }
        },
        title: {
          text: options.xAxisText,
          style: {
            color: this.textStyleColor,
            fontSize: '14px',
          },
        },
        categories: options.xAxisCategories,
        minorGridLineColor: '',
        crosshair: true,
      },
      yAxis: {
        gridLineColor: '#e6e6e7',
        lineColor: '',
        tickColor: '',
        labels: { style: { color: this.textStyleColor} },
        title: {
          text: options.yAxisText,
          style: {
            color: this.textStyleColor,
          },
        },
        minorGridLineColor: '',
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        borderColor: '',
        headerFormat: '<table><tr><th colspan="2">{point.key}.</th></tr>',
        pointFormat: '<tr><td style="color: {series.color}"> <b style="margin-right: 1ch;">{series.name}: </b> </td>' +
          '<td style="text-align: right"><b>{point.y}</b></td>'+
          '</tr>'
        ,
        footerFormat: '</table>',
        useHTML: true,
        valueSuffix: ` ${options.countedVariableName}`,
        style: {color: this.textStyleColor},
      },
      plotOptions: {
        series: {
          dataLabels: {color: this.textStyleColor},
          marker: {lineColor: '#46465C'},
          borderColor: '#ccd6eb',
        },
        bar: {
          pointPadding: 0.2,
          borderWidth: 1,
          cursor: 'pointer',
          allowPointSelect: true,
        },
        column: {
          pointPadding: 0.2,
          borderWidth: 1,
          cursor: 'pointer',
          allowPointSelect: true,
        },
        pie: {
          borderWidth: 2,
          borderColor: '#ccd6eb',
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
          cursor: 'pointer',
          allowPointSelect: true,
          tooltip: {
            pointFormat: '<tr><td style="color:{white};"><b>{series.name}:</b></td><td>{point.y}</td></tr>' + 
            `<tr><td style="color:{white};"> <b>Porcentaje:</b>{point.percentage:.1f}% </td></tr>`,
          },
        },
      },
      series: options.data,
      exporting: {
        buttons: {
          contextButton: {
            menuItems: [
              'printChart',
              'downloadCSV',
              'downloadXLS',
              'separator',
              'downloadPNG',
              'downloadPDF',
              'downloadSVG',
              'viewFullscreen'
            ],
          },
        },
        allowHTML: true,
        allowTableSorting: true,
        // showTable: true,
      },
      navigation: {
        buttonOptions: {
          theme: {
            fill: 'white',
            stroke: '#white'
          },
          symbolFill: '#445060'
        }
      },
  
    };
  }
}
