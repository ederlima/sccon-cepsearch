import { LocalStorageService } from './../../services/local-storage.service';
import { Address } from '../../../../shared-components/interfaces/address';
import { AddressTableComponent } from './../../../../shared-components/address-table/address-table.component';
import { CepSearchService } from './../../services/cep-search.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.scss']
})
export class CepSearchComponent implements OnInit, OnDestroy {

  @ViewChild('resultTable', {static: false}) addressList!: AddressTableComponent;
  constructor( private cepService: CepSearchService, private localStorage: LocalStorageService ) {
    cepService.searchResult$.subscribe(
      result => {
      }
    );
  }
  public searchResult!: Address;
  private subscriptions: any[] = [];
  private doSearch(cep: number): void {
    const sub = this.cepService.doSearch(cep).subscribe(
      result => {
        this.searchResult = result;
        this.searchResult.data = new Date().toLocaleDateString();
        this.addAddressToList(this.searchResult);
      }
    );
    this.subscriptions.push(sub);
  }
  private addAddressToList(address: Address): void {
    this.addressList.addAddress(address);
  }
  public searchResultHandler(address: Address): void {
  }
  public handleSearch(cep: number): void {
    this.doSearch(cep);
  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
