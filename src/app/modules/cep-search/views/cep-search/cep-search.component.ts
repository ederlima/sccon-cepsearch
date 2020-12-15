import { CepSearchService } from './../../services/cep-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.scss']
})
export class CepSearchComponent implements OnInit {

  constructor( private cepService: CepSearchService ) { }

  private doSearch(cep: number): void {
    this.cepService.doSearch(cep).subscribe(
      result => {
        console.log(result);
      }
    );
  }
  public handleSearch(cep: number) {
    this.doSearch(cep);
  }
  ngOnInit(): void {
  }

}
