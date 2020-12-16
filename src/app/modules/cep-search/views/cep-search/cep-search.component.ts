import { SearchHistoryService } from './../../services/search-history.service';
import { MessageServiceService } from './../../../../shared-components/services/message-service.service';
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
  constructor(
    private cepService: CepSearchService,
    private searchHistoryService: SearchHistoryService,
    private messageService: MessageServiceService
    ) {

  }
  public searchResult!: Address;
  private subscriptions: any[] = [];
  public history!: Address[];
  private doSearch(cep: number): void {
    this.messageService.showMessage('Aguarde', 'Buscando endereços...');
    const sub = this.cepService.doSearch(cep).subscribe(
      result => {
        if  (!result.erro) {
          this.searchResult = result;
          this.searchResult.data = new Date().toLocaleDateString();
          this.addAddressToList(this.searchResult);
          this.messageService.showMessage('Endereço encontrado', 'Verifique a lista de endereços.');
          const interval = setInterval( () => {
            this.messageService.closeMessage();
            clearInterval(interval);
          }, 500);
        } else {
          this.messageService.showMessage('Não encontrado', 'O CEP é inválido ou não está cadastrado no sistema.');
        }
      },
      error => {
        this.messageService.showMessage('Ocorreu um erro', 'O sistema não respondeu, verifique sua conexão e tente novamente.');
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
  public getHistory(): void {
    this.messageService.showMessage('Buscando Histórico', 'Aguarde enquanto buscamos o seu histórico de pesquisas.');
    this.searchHistoryService.getHistory().subscribe(
      result => {
        const ordered: any = result;
        this.history = ordered.addresses.reverse();
        this.addressList.addressList = this.history;
        this.messageService.closeMessage();
      },
      error => {
        this.messageService.showMessage('Erro ao buscar histórico', 'Não foi possível buscar o histórico.');
      }
    );
  }
  ngOnInit(): void {
    this.getHistory();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
