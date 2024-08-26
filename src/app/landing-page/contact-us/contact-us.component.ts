import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FocusOrigins } from '../../shared/enums/focus-origin.emun';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  @ViewChild('contactTitleId', { static: true }) mainTitlesRef: ElementRef =
    {} as ElementRef;

    constructor(private focusMonitor: FocusMonitor) {}

    ngAfterViewChecked() {
      this.focusMonitor.focusVia(this.mainTitlesRef.nativeElement, FocusOrigins.keyboard);
    }
}
