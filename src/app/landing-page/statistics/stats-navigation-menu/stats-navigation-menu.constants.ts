import { Injectable } from '@angular/core';
import { INavItem } from '../../../shared/interfaces/nav-item.interface';

@Injectable()
export class NavigationMenuConstants {
  public NAV_ITEMS: INavItem[] = [
    { label: 'Balanza comercial', routerLink: 'trade-balance' },
    { label: 'Importaciones', routerLink: 'product-imports' },
    { label: 'Exportaciones', routerLink: 'product-exports' },
  ];

  constructor() {}
}
