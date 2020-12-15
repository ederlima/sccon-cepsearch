import { CepSearchService } from './services/cep-search.service';
import { CepSearchComponent } from './views/cep-search/cep-search.component';
import { CepSearchFormComponent } from './components/cep-search-form/cep-search-form.component';
import { CepSearchRoutingModule } from './cep-search.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [CepSearchFormComponent, CepSearchComponent],
  imports: [
    CommonModule,
    CepSearchRoutingModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    CepSearchService
  ],
  exports: [
    CepSearchFormComponent,
    CepSearchComponent
  ]
})
export class CepSearchModule { }
