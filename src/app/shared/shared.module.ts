import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';
import { SharedService } from './services/shared/shared.service';
import { CustomHighchartsComponent } from './standalones/custom-highcharts/custom-highcharts.component';
import { LogoSvgComponent, TabListComponent } from './components';
import { ThemeService } from '../core/services';

@NgModule({
  declarations: [TabListComponent, LogoSvgComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CustomHighchartsComponent,
    HttpClientModule,
  ],
  exports: [
    CustomHighchartsComponent,
    MaterialModule,
    LogoSvgComponent,
    TabListComponent
  ],
  providers: [
    SharedService,
    ThemeService
  ]
})
export class SharedModule { }
