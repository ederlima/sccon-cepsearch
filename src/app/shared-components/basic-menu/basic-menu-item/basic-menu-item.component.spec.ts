import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMenuItemComponent } from './basic-menu-item.component';

describe('BasicMenuItemComponent', () => {
  let component: BasicMenuItemComponent;
  let fixture: ComponentFixture<BasicMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
