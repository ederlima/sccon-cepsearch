import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BasicLink } from '../interfaces/basic-link';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
  animations: [
    trigger('showHideMenu', [
      state('open', style({left: 0})),
      state('closed', style({left: '-300px'})),
      transition('* => *', animate('.15s'))
    ])
  ]
})
export class MainNavigationComponent implements OnInit {

  constructor() { }
  public isOpen = false;
  public menu: BasicLink[] = [
    {
      label: 'Home',
      url: '/home',
      external: false,
      icon: 'icon-home'
    },
    {
      label: 'Endereços',
      url: '',
      external: false,
      icon: 'icon-location',
      children: [
        {
          label: 'Buscar Endereços',
          url: '/buscar',
          external: false,
          icon: 'icon-search'
        }
      ]
    },

  ];
  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {
  }

}
