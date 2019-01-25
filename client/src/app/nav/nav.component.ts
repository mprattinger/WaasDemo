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
  lastClickedLevel: number = 0;

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
    // this.menuItems.forEach(x => {
    //   x.isActive = false;
    //   x.children = [];
    // });
    // item.isActive = true; // TODO
    // const children = this.menuService.getMenuSub(item);
    // item.children = children;
  }

  // menuChildItemClicked(item: NavItem): void {
  //   item.children = [];
  //   item.isActive = true;
  //   const children = this.menuService.getMenuSubSub(item);
  //   item.children = children;
  // }

  // menuSubChildItemClicked(item: NavItem): void {
  //   this.menuItems.forEach(x => x.isActive = false);
  //   item.isActive = true;
  // }
}
