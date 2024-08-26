import { Injectable } from "@angular/core";
import { environment } from "./../environments/environment";

@Injectable()
export class AppConfig {
  
  private _apiEndpoint: string = `${environment.apiHost}:${environment.apiPort}/`;
  
  public get apiEndpoint(): string {
    if(environment.production) {
      this._apiEndpoint = environment.apiHost + '/'
    };

    return this._apiEndpoint;
  }
}
