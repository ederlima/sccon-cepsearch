import { BasicLink } from './../interfaces/basic-link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
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
  ngOnInit(): void {
  }

}
