import { Injectable } from "@angular/core";
import { NavItem } from "../nav/models/nav-item";
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: "root"
})
export class MenuService {

  private menuData: NavItem[] = [];

  constructor(private httpClient: HttpClient) { }

  async loadMenu(selectedItem: NavItem = null): Promise<NavItem[]> {
    return new Promise<NavItem[]>(async resolve => {
      if (this.menuData.length === 0) {
        this.menuData = await this.loadData();
      }

      if (selectedItem === null) {
        const d = _.filter(this.menuData, x => x.level === 1);
        d.forEach(x => x.children = []);
        resolve(d);
      } else {
        //Childlevel laden
        let childs = _.filter(this.menuData, x => x.parentLabel === selectedItem.label);
        childs.forEach(x => x.children = []);
        let currentParent = selectedItem.label;
        for (let index = selectedItem.level; index > 0; index--) {
          const data = _.filter(this.menuData, y => y.level === index );
          data.forEach(x => x.children = []);
          (_.find(data, x => x.label === currentParent)).children = childs;
          (_.find(data, x => x.label === currentParent)).isActive = true;
          childs = data;
          currentParent = (_.head(data)).parentLabel;
        }
        resolve(childs);
      }
    });
  }


  private loadData(): Promise<NavItem[]> {

    return this.httpClient.get<NavItem[]>("https://localhost:44318/api/v1/menu").toPromise();

    // return new Promise<NavItem[]>()
    // this.httpClient.get("https://localhost:44318/api/v1/menu").subscribe((data: NavItem[]) => {
    //   this.menuData = data;
    // });
  }

  // loadMenu(selectedItem: NavItem = null): NavItem[] {

  //   const level1 = this.loadLevel1();

  //   if (selectedItem == null) { return level1; }

  //   let parent = selectedItem;
  //   for (let index = selectedItem.level; index !== 0; index--) {
  //     let childs: NavItem[] = [];
  //     if (index === 1) {
  //       childs = this.loadLevel2();
  //     } else {
  //       childs = this.loadLevel3();
  //     }

  //     if (index === 3) {
  //       childs[childs.findIndex(x => x.label === selectedItem.label)].isActive = true;
  //     }

  //     parent.isActive = true;
  //     parent.children = childs;

  //     if (!level1.find(x => x.label === parent.label)) {
  //       let level1Parent = level1[level1.findIndex(x => x.label === selectedItem.label)]
  //       childs[childs.findIndex(x => x.label === selectedItem.label)].isActive = true;
  //     }
  //   }
  // }

  // private loadLevel1(): NavItem[] {
  //   const ret: NavItem[] = [];

  //   let item = new NavItem();
  //   item.level = 1;
  //   item.label = "Stücklistenkopf";
  //   item.link = "";
  //   ret.push(item);

  //   item = new NavItem();
  //   item.level = 1;
  //   item.label = "Arbeitsplan";
  //   item.link = "";
  //   ret.push(item);

  //   item = new NavItem();
  //   item.level = 1;
  //   item.label = "Berichte";
  //   item.link = "";
  //   ret.push(item);

  //   item = new NavItem();
  //   item.level = 1;
  //   item.label = "Dokumente (Kunde)";
  //   item.link = "";
  //   ret.push(item);

  //   item = new NavItem();
  //   item.level = 1;
  //   item.label = "Rückmeldungen";
  //   item.link = "";
  //   ret.push(item);

  //   return ret;
  // }

  // private loadLevel2(): NavItem[] {
  //   const ret: NavItem[] = [];

  //   let child = new NavItem();
  //   child.level = 2;
  //   child.parenLabel = "Arbeitsplan";
  //   child.label = "Vorbereiten";
  //   child.link = "";
  //   ret.push(child);

  //   child = new NavItem();
  //   child.level = 2;
  //   child.parenLabel = "Arbeitsplan";
  //   child.label = "Nutzentrennen";
  //   child.link = "";
  //   ret.push(child);

  //   child = new NavItem();
  //   child.level = 2;
  //   child.parenLabel = "Arbeitsplan";
  //   child.label = "Bestücken";
  //   child.link = "";
  //   ret.push(child);

  //   child = new NavItem();
  //   child.level = 2;
  //   child.parenLabel = "Arbeitsplan";
  //   child.label = "Aus-/Endfertigen";
  //   child.link = "";
  //   ret.push(child);

  //   child = new NavItem();
  //   child.level = 2;
  //   child.parenLabel = "Arbeitsplan";
  //   child.label = "Verpacken";
  //   child.link = "";
  //   ret.push(child);

  //   return ret;
  // }

  // private loadLevel3(): NavItem[] {
  //   const ret: NavItem[] = [];

  //   let subchild = new NavItem();
  //   subchild.level = 3;
  //   subchild.parenLabel = "Bestücken";
  //   subchild.label = "Seite 1";
  //   subchild.link = "";
  //   ret.push(subchild);

  //   subchild = new NavItem();
  //   subchild.level = 3;
  //   subchild.parenLabel = "Bestücken";
  //   subchild.label = "Seite 1";
  //   subchild.link = "";
  //   ret.push(subchild);

  //   subchild = new NavItem();
  //   subchild.level = 3;
  //   subchild.parenLabel = "Bestücken";
  //   subchild.label = "Step-by-Step";
  //   subchild.link = "";
  //   ret.push(subchild);

  //   return ret;
  // }

}
