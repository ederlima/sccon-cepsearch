import { CepSearchRoutingModule } from './cep-search.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepSearchComponent } from './cep-search/cep-search.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CepSearchComponent],
  imports: [
    CommonModule,
    CepSearchRoutingModule,
    MatButtonModule
  ]
})
export class CepSearchModule { }
