import { MainNavigationComponent } from './../main-navigation/main-navigation.component';
import { BasicLink } from './../interfaces/basic-link';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('mainMenu', {static: false}) menu!: MainNavigationComponent;
  public menuToggleHandler(): void {
    this.menu.toggleMenu();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
