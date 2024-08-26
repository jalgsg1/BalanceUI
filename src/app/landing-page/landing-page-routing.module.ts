import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarMaterialComponent } from './layout-material/navbar-material/navbar-material.component';
import { FooterMaterialComponent } from './layout-material/footer-material/footer-material.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarMaterialComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('./statistics/statistics.module').then(
            (m) => m.StatisticsModule
          ),
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact',
        component: ContactUsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

export const routedComponents = [
  AboutUsComponent,
  ContactUsComponent,
  FooterMaterialComponent,
  HomeComponent,
  NavbarMaterialComponent
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
