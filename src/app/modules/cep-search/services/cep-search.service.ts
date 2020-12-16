import { environment } from './../../../../environments/environment';
import { Address } from '../../../shared-components/interfaces/address';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'any'
})
export class CepSearchService {

  constructor( private httpClient: HttpClient ) { }
  private SERVICE_URL = environment.SERVICE_URL;
  private searchResultSource = new Subject<Address>();
  public searchResult$ = this.searchResultSource.asObservable();

  public doSearch(cep: number): Observable<Address> {
    return this.httpClient.get<Address>(`${this.SERVICE_URL}/${cep}/json`).pipe(
      tap(
        result => {
          this.searchResultSource.next(result);
        }
      ),
      catchError((error: any) => Observable.throw(this.handleError('Ocorreu um erro geral. Verifique sua conexão com a internet.')))

    );
  }
  private handleError(str: string): void {
    console.log(str);
  }
}
