import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cep-search-form',
  templateUrl: './cep-search-form.component.html',
  styleUrls: ['./cep-search-form.component.scss']
})
export class CepSearchFormComponent implements OnInit {

  @Output() searchClick = new EventEmitter();

  constructor() { }
  public formGroup = new FormGroup({cep: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{8}$/)])});
  public handleSearchClick(): void {
    this.searchClick.emit(this.formGroup.value.cep);
  }

  ngOnInit(): void {
  }

}
