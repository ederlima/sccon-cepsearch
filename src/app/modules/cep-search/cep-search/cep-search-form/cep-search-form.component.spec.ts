import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepSearchFormComponent } from './cep-search-form.component';

describe('CepSearchFormComponent', () => {
  let component: CepSearchFormComponent;
  let fixture: ComponentFixture<CepSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CepSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
