import { Component } from '@angular/core';
import { INavItem } from '../../../shared/interfaces/nav-item.interface';
import { NavigationMenuConstants } from './stats-navigation-menu.constants';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './stats-navigation-menu.component.html',
  styleUrls: ['./stats-navigation-menu.component.scss'],
})
export class StatsNavigationMenuComponent {
  public navItems: INavItem[];
  public _activeRoute: string = '';

  constructor(private _navbarConstants: NavigationMenuConstants) {
    this.navItems = this._navbarConstants.NAV_ITEMS;
  }

  getSelectedSection(section: INavItem) {
    this._activeRoute = section.routerLink;
  }
}
