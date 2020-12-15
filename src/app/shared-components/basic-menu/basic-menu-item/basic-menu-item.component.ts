import { BasicMenuComponent } from './../basic-menu.component';
import { BasicLink } from './../../../interfaces/basic-link';
import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-basic-menu-item',
  templateUrl: './basic-menu-item.component.html',
  styleUrls: ['./basic-menu-item.component.scss'],
  animations: [
    trigger('showHide', [
      state('hidden', style({
        opacity: '0',
        visibility: 'hidden'
      })),
      state('shown', style({
        opacity: '1',
        visibility: 'visible',
      })),
      transition('* => *', animate('.15s'))
    ])
  ]
})
export class BasicMenuItemComponent implements OnInit {

  constructor() { }
  @Input() menuItem!: BasicLink;
  @Input() isSubMenuItem!: boolean;
  private _subMenuOpen = false;

  public toggleSubMenu(): void {
    this._subMenuOpen = !this._subMenuOpen;
  }
  public showMenu(): boolean {
    return this._subMenuOpen;
  }
  public hideMenu(): void {
    if (this._subMenuOpen) {
      this.toggleSubMenu();
    }
  }
  ngOnInit(): void {
  }

}
