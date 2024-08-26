import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import {
  LandingPageRoutingModule,
  routedComponents,
} from './landing-page-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [routedComponents],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports: [routedComponents],
  providers: [],
})
export class LandingPageModule {}
