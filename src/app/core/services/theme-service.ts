import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
    private _isDark = true;
    isDark$ = new BehaviorSubject<boolean>(this._isDark);

    set isDark(value: boolean) {
      this._isDark = value;
      this.isDark$.next(value);
    }

    get isDark() {
      return this._isDark;
    }
}