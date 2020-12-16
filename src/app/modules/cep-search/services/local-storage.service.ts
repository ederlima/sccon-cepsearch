import { Address } from '../../../shared-components/interfaces/address';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class LocalStorageService {

  constructor() { }

  public saveAddress(address: Address): any {
    return localStorage.setItem('address', JSON.stringify(address));
  }
}
