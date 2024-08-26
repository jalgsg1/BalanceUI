import { Injectable } from '@angular/core';

@Injectable()
export class TestMocks {

  public TRADE_BALACE = {
    data: [
      {
        name: 'Importaciones',
        data: [7800, 7000, 7200, 2999]
      },
      {
        name: 'Exportaciones',
        data: [9800, 8200, 8300, 2999]
      },
      {
        name: 'Saldo',
        data: [2000, 1200, 1100, 2999]
      }
    ],
    xAxisCategories: ['2021-05-31', '2022-05-31', '2023-05-31', '2024-05-31']
  }

  public IMPORTS = {
    data: [ 
      { name: 'Maiz', value: 1020 },{ name: 'Otros', value: 4000 },{ name: 'Fresco', value: 2040 },
      { name: 'Arroz', value: 2020 },{ name: 'Piña', value: 2040 }, { name: 'Chips', value: 1520 }
    ]
  }

  public EXPORTS = {
    data: [ 
      { name: 'Maiz', value: 1000 },{ name: 'Frijol', value: 1500 },{ name: 'Piña', value: 3200 },
      { name: 'Café', value: 2500 },{ name: 'Papa', value: 2300 }, { name: 'Chips', value: 2000 }
    ]
  }
  
}
