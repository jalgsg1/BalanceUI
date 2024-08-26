import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule),
  }
  // Admin or loggin screens can be added here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
