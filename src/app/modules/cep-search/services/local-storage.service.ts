import { Address } from '../../../shared-components/interfaces/address';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class LocalStorageService {
  private addresses: any;
  constructor( ) {
    this.addresses = localStorage.getItem('addresses');
  }
  public saveAddress(address: Address): any {
    localStorage.setItem('addresses', JSON.stringify(this.addresses));
  }
  public getAddress(): any {
    return localStorage.getItem('addresses');
  }
}
