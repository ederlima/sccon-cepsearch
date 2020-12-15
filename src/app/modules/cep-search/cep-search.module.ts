import { CepSearchRoutingModule } from './cep-search.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepSearchComponent } from './cep-search/cep-search.component';



@NgModule({
  declarations: [CepSearchComponent],
  imports: [
    CommonModule,
    CepSearchRoutingModule
  ]
})
export class CepSearchModule { }
