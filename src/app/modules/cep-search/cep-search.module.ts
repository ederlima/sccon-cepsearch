import { CepSearchService } from './services/cep-search.service';
import { CepSearchComponent } from './views/cep-search/cep-search.component';
import { CepSearchFormComponent } from './components/cep-search-form/cep-search-form.component';
import { CepSearchRoutingModule } from './cep-search.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CepSearchFormComponent, CepSearchComponent],
  imports: [
    CommonModule,
    CepSearchRoutingModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
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
