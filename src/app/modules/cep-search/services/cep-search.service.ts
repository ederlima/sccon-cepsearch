import { environment } from './../../../../environments/environment';
import { Address } from '../interfaces/address';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'any'
})
export class CepSearchService {

  constructor( private httpClient: HttpClient ) { }
  private SERVICE_URL = environment.SERVICE_URL;

  public doSearch(cep: number): Observable<Address> {
    return this.httpClient.get<Address>(`${this.SERVICE_URL}/${cep}/json`);
  }

}
