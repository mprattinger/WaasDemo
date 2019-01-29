import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { NavItem } from './models/nav-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  menuItems: NavItem[] = [];
  lastClickedLevel = 0;
  links: Array<{ text: string, path: string }> = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadData();
  }

  private async loadData() {
    this.menuItems = await this.menuService.loadMenu();
    console.log(this.menuItems.length);
  }

  async menuItemClicked(item: NavItem) {
    if (item.level > this.lastClickedLevel) {
      this.menuItems = await this.menuService.loadMenu(item);
      this.lastClickedLevel = item.level;
    }
  }
}
