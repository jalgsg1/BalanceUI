import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatsNavigationMenuComponent } from './stats-navigation-menu/stats-navigation-menu.component';
import { ProductExportsComponent } from './product-exports/product-exports.component';
import { ProductImportsComponent } from './product-imports/product-imports.component';
import { TradeBalanceComponent } from './trade-balance/trade-balance.component';

const routes: Routes = [
  {
    path: '',
    component: StatsNavigationMenuComponent,
    children: [
      {
        path: '',
        component: TradeBalanceComponent,
      },
      {
        path: 'trade-balance',
        component: TradeBalanceComponent,
      },
      {
        path: 'product-imports',
        component: ProductImportsComponent,
      },
      {
        path: 'product-exports',
        component: ProductExportsComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

export const routedComponents = [
  ProductExportsComponent,
  ProductImportsComponent,
  TradeBalanceComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
