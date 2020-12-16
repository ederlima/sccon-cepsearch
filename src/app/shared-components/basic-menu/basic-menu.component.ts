import { BasicMenuItemComponent } from './basic-menu-item/basic-menu-item.component';
import { BasicLink } from './../interfaces/basic-link';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-menu',
  templateUrl: './basic-menu.component.html',
  styleUrls: ['./basic-menu.component.scss']
})
export class BasicMenuComponent implements OnInit {

  constructor() { }
  @Input() menu!: BasicLink[];
  @Input() isSubMenu!: boolean;

  ngOnInit(): void {
  }

}
