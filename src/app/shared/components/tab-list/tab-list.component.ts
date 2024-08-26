import { ActivatedRoute, Router } from '@angular/router';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

import { INavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss'],
})
export class TabListComponent implements OnInit{
  @Input() list?: INavItem[];
  @Output() selectedItem;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.selectedItem = new EventEmitter<INavItem>();
  }

  ngOnInit(): void {
    if(this.list) {
      const url = this.list[0].routerLink; 
      this._router.navigate([url], { relativeTo: this._activatedRoute.parent });
    }
  }

  selectTab(selectedItem: INavItem): void {
    console.log("🚀 ~ TabListComponent ~ selectTab ~ selectedItem:", selectedItem)
    this.selectedItem.emit(selectedItem);
  }

}
