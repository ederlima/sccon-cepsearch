import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cep-search-form',
  templateUrl: './cep-search-form.component.html',
  styleUrls: ['./cep-search-form.component.scss']
})
export class CepSearchFormComponent implements OnInit {
  @Output() doSearch = new EventEmitter();
  constructor() { }
  public val = '';
  public handleSearchClick(): void {
    console.log('emitindo evento');
    this.doSearch.emit(79009250);
  }
  ngOnInit(): void {
  }

}
