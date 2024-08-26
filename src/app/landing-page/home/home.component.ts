import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { FocusOrigins } from '../../shared/enums/focus-origin.emun';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // @ViewChild('homeTitleId', { static: true }) mainTitlesRef: ElementRef =
  //   {} as ElementRef;

  public title: string = 'Sobre nosotros';

  constructor(private focusMonitor: FocusMonitor,private _router: Router, private _activatedRoute: ActivatedRoute) {}

  ngAfterViewChecked() {
    // this.focusMonitor.focusVia(this.mainTitlesRef.nativeElement, FocusOrigins.keyboard);
  }
  redirectToURL(url?: string) {
    if (url)
      this._router.navigate([url], { relativeTo: this._activatedRoute.parent });
  }
}


