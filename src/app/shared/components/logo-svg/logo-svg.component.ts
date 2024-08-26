import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-svg',
  templateUrl: './logo-svg.component.html',
  styleUrls: ['./logo-svg.component.scss']
})
export class LogoSvgComponent {
  @Input() vSize: number = 50;
  @Input() hSize: number = 100;
  @Input() logoColor?: string = "#002060";
  @Input() letterColor?: string = "#333333";
  
  constructor() {
  }
}
