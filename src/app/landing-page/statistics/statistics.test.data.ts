import { Injectable } from '@angular/core';

@Injectable()
export class TestMocks {
  public TRADE_BALACE = {
    xAxisCategories: ['2022-06-30', '2023-06-30', '2024-06-30'],
    data: [
      {
        name: 'Exportaciones',
        data: [7471.09, 9064.25, 9675.05],
      },
      {
        name: 'Importaciones',
        data: [10031.71, 11091.18, 11763.35],
      },
      {
        name: 'Saldo',
        data: [-2560.62, -2026.94, -2088.31],
      },
    ],
  };

  public IMPORTS = {
    data: [
      {
        name: 'Vehículos',
        value: 413.9,
      },
      {
        name: 'Maquinaria',
        value: 365.04,
      },
      {
        name: 'Productos de plástico',
        value: 306.09,
      },
      {
        name: 'Otros',
        value: 4708.49,
      },
    ],
  };

  public EXPORTS = {
    data: [
      {
        name: 'Instrumentos médicos',
        value: 1754.21,
      },
      {
        name: 'Piña',
        value: 336.86,
      },
      {
        name: 'Banano',
        value: 309.48,
      },
      {
        name: 'Otros',
        value: 2253.05,
      },
    ],
  };
}
