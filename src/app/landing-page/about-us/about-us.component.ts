import { FocusMonitor } from '@angular/cdk/a11y';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FocusOrigins } from '../../shared/enums/focus-origin.emun';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements AfterViewChecked {
  @ViewChild('aboutUsTitleId', { static: true }) mainTitlesRef: ElementRef =
    {} as ElementRef;

  public title: string = 'Acerca de';

  constructor(private focusMonitor: FocusMonitor,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {}

  ngAfterViewChecked() {
    this.focusMonitor.focusVia(this.mainTitlesRef.nativeElement, FocusOrigins.keyboard);
  }

  /*
    .example-focus-monitor {
      padding: 20px;
    }

    .example-focus-monitor .cdk-mouse-focused {
      background: rgba(255, 0, 0, 0.5);
    }

    .example-focus-monitor .cdk-keyboard-focused {
      background: rgba(0, 255, 0, 0.5);
    }

    .example-focus-monitor .cdk-touch-focused {
      background: rgba(0, 0, 255, 0.5);
    }

    .example-focus-monitor .cdk-program-focused {
      background: rgba(255, 0, 255, 0.5);
    }

    .example-focus-monitor button:focus {
      box-shadow: 0 0 30px cyan;
    }
   */

  // focusTitle() {
  //   console.log('se acciona?')
  //   this.mainTitlesRef.nativeElement.scrollIntoView({
  //     behavior: 'smooth',
  //   });
  //   this.mainTitlesRef.nativeElement.tabIndex = 2;
  //   this.mainTitlesRef.nativeElement.focus();
  // }
  redirectToURL(url?: string) {
    if (url)
      this._router.navigate([url], { relativeTo: this._activatedRoute.parent });
  }
}
