import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomHighchartsComponent } from '../../shared/standalones/custom-highcharts/custom-highcharts.component';
import { StatsNavigationMenuComponent } from './stats-navigation-menu/stats-navigation-menu.component';
import { NavigationMenuConstants } from './stats-navigation-menu/stats-navigation-menu.constants';
import { SharedModule } from '../../shared/shared.module';
import {
  StatisticsRoutingModule,
  routedComponents,
} from './statistics-routing.module';

@NgModule({
  declarations: [...routedComponents, StatsNavigationMenuComponent],
  imports: [
    CommonModule,
    CustomHighchartsComponent,
    RouterModule,
    SharedModule,
    StatisticsRoutingModule,
  ],
  exports: [CustomHighchartsComponent],
  providers: [NavigationMenuConstants],
})
export class StatisticsModule {}
