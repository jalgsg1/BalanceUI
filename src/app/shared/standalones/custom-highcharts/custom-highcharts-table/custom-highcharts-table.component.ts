import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { ITableData } from '../../../interfaces/custom-highcharts/chart-data.interface';

@Component({
  selector: 'app-custom-highcharts-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-highcharts-table.component.html',
  styleUrls: ['./custom-highcharts-table.component.scss'],
})
export class CustomHighchartsTableComponent {  
  @Input() tableData?: ITableData;
  @Input() caption?: string;
  @Input() set includeHighConstrast(value: boolean) {
    this._includeHighConstrast = value;
  }
  public _includeHighConstrast: boolean;

  constructor() {
    this._includeHighConstrast = true;

    this.tableData = {
      headers: [],
      rows: []
    }
  }
}
