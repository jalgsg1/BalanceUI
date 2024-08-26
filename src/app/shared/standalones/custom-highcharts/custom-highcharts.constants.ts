import { Injectable } from '@angular/core';

@Injectable()
export class CustomHighchartsConstants {
  constructor() {}

  public LABELS = {
    highContrastButton: 'Alto contraste',
    patterButton: 'Patrones',
    active: 'activado',
    inactive: 'desactivado',
    btnGroup: 'Opciones vista de gráfico',
    showTable: 'Ver Tabla',
    showGraphic: 'Ver Gráfico',
    initDate: 'Fecha',
    initDateMonth: 'Fecha, mes',
    regime: 'Régimen',
    showContrast: 'Mostrar alto contraste: ',
    showPatterns: 'Mostrar patrones: ',
    filterOptsImportExports: '5 Filtros y un botón para refrescar el gráfico',
    category: 'Categoría por',
    yearPeriod: 'Cantidad de periodos',
    topNCountries: 'Top N países',
    topNProducts: 'Top N productos',
    filterOptsTradeBalance: '4 Filtros y un botón para refrescar el gráfico',
  };

  public MONTHS_DROPDOWN_DATA = [
    { value: 1, label: 'Enero' },
    { value: 2, label: 'Febrero' },
    { value: 3, label: 'Marzo' },
    { value: 4, label: 'Abril' },
    { value: 5, label: 'Mayo' },
    { value: 6, label: 'Junio' },
    { value: 7, label: 'Julio' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Septiembre' },
    { value: 10, label: 'Octubre' },
    { value: 11, label: 'Noviembre' },
    { value: 12, label: 'Diciembre' },
  ];
}
