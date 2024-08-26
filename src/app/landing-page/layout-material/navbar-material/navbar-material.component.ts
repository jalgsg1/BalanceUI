import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewChecked, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { INavItem } from 'src/app/shared/interfaces';
import { NavbarConstants } from './navbar.constants';
import { FocusOrigins } from 'src/app/shared/enums';
import { ThemeService } from 'src/app/core/services';

@Component({
  selector: 'app-navbar-material',
  templateUrl: './navbar-material.component.html',
  styleUrls: ['./navbar-material.component.scss'],
  providers:[NavbarConstants]
})
export class NavbarMaterialComponent implements AfterViewChecked {
  public navItems: INavItem[];
  public isDark: boolean = true;
  public logoColor?: string;
  public logoLetterColor?: string;

  @ViewChild('navItemId0', { static: true }) mainTitlesRef: ElementRef = {} as ElementRef;
  
  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'theme-dark' : 'theme-light';
  }

  constructor(
    public focusMonitor: FocusMonitor,
    private _navbarConstants: NavbarConstants,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private themeService: ThemeService
  ) {
    this.navItems = this._navbarConstants.NAV_ITEMS;
    this.setLogoColors(this.isDark);
  }

  setLogoColors(isDark: boolean) {
    this.logoColor = (isDark) ? 'white': "#002060";
    this.logoLetterColor = (isDark) ? 'white': "#333333";
  }

  ngAfterViewChecked() {
    if(this.mainTitlesRef)
      this.focusMonitor.focusVia(this.mainTitlesRef, FocusOrigins.keyboard);
  }

  redirectToURL(url?: string) {
    if (url)
      this._router.navigate([url], { relativeTo: this._activatedRoute.parent });
  }

  changeTheme(isDark: boolean) {
    this.isDark = isDark;
    this.themeService.isDark = isDark;
    this.setLogoColors(isDark);
  }
}
