import { Address } from '../interfaces/address';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.scss']
})
export class AddressTableComponent implements OnInit {

  constructor() { }
  private _addressList: Address[] = [];
  public get addressList(): Address[] {
    return this._addressList;
  }

  public addAddress(address: Address): void {
    this._addressList.push(address);
  }

  public removeAddress(address: Address): void {
    this._addressList.splice(this._addressList.indexOf(address), 1);
  }
  ngOnInit(): void {

  }

}

