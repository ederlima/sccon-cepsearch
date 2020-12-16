import { DirectivesModule } from './../directives/directives.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicMenuComponent } from './basic-menu/basic-menu.component';
import { BasicMenuItemComponent } from './basic-menu/basic-menu-item/basic-menu-item.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { AddressTableComponent } from './address-table/address-table.component';
import { MessageComponentComponent } from './message-component/message-component.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BasicMenuComponent,
    BasicMenuItemComponent,
    MainNavigationComponent,
    AddressTableComponent,
    MessageComponentComponent],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BasicMenuComponent,
    MainNavigationComponent,
    AddressTableComponent,
    MessageComponentComponent
  ]
})
export class SharedComponentsModule { }
