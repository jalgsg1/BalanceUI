import { Injectable } from '@angular/core';
import { INavItem } from '../../../shared/interfaces/nav-item.interface';

@Injectable()
export class NavbarConstants {

  public NAV_ITEMS: INavItem[] = [
    {
      label: 'Inicio',
      routerLink: 'home',
    },
    {
      label: 'Estadísticas',
      routerLink: 'statistics',
    },
    {
      label: 'Acerca de',
      routerLink: 'about-us',
    },
    {
      label: 'Contáctenos',
      routerLink: 'contact',
    },
  ];

  constructor() {}
}
