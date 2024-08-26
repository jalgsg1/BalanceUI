import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  protected httpHeaders: HttpHeaders;
  protected API_ENDPOINT: string = new AppConfig().apiEndpoint;
  // ToDo: Change API endpoint implementation for production.

  constructor() {
    this.httpHeaders = this.initHttpRequestOptions();
  }

  initHttpRequestOptions() {
     return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set("Authorization", 'my-auth-token');
  }

  isItemLocalStorage(key: string): boolean {
    return localStorage.getItem(key) != null;
  }

  saveInLocalStorage(key: string, data: any) {
    try {
      localStorage.setItem(key, data);
    } catch (error) {
      /* Ignored error */
    }
  }

  loadFromLocalStorage(key: string): any {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      /* Ignored error */
    }
  }

  deleteFromLocalStorage(key: string): any {
    localStorage.removeItem(key);
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(operation);
      this.handleErrorAuxiiliar(error, operation);
      return of(result as T);
    };
  }

  /**
   * Method to handle errors
   * @param error
   */
  private handleErrorAuxiiliar(error: HttpErrorResponse, operation: string) {
    if (error.status === 0) { // A client-side or network error occurred. Handle it accordingly.
      alert('Error de conexión con el servidor.');
    } else {
      alert('Error al cargar datos: ' + error.error);
      // console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }

    // return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
