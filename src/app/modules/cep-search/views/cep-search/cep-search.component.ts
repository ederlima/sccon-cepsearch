import { Address } from '../../../../shared-components/interfaces/address';
import { AddressTableComponent } from './../../../../shared-components/address-table/address-table.component';
import { CepSearchService } from './../../services/cep-search.service';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.scss']
})
export class CepSearchComponent implements OnInit {

  @ViewChild('resultTable') addressList!: AddressTableComponent;
  constructor( private cepService: CepSearchService ) { }
  private searchResult!: Address;
  private doSearch(cep: number): void {
    this.cepService.doSearch(cep).subscribe(
      result => {
        this.searchResult = result;
        this.addAddressToList(this.searchResult);
      }
    );
  }
  private addAddressToList(address: Address): void {
    this.addressList.addAddress(address);
  }
  public searchResultHandler(address: Address): void {
    console.log(address);
  }
  public handleSearch(cep: number): void {
    this.doSearch(cep);
  }
  ngOnInit(): void {
  }

}
