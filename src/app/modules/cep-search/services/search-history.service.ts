import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../../../shared-components/interfaces/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {

  constructor( private httpClient: HttpClient ) { }

  public getHistory(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(environment.MOCKY_IO_URL);
  }
}
