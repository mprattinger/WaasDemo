import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/waas/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent }
  // { path: '', redirectTo: '/base', pathMatch: 'full'},
  // {path: '', component: WaasLayoutComponent, children: [
  //   { path: 'home', component: HomeComponent }
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaasRoutingModule { }
