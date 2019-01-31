import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './layout/base/base-layout.component';
import { WaasLayoutComponent } from './layout/waas/waas-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/base', pathMatch: 'full'},
  { path: '', component: BaseLayoutComponent, children: [
    { path: 'base', loadChildren: '../app/modules/base/base.module#BaseModule' }
  ]},
  {
    path: 'waas', component: WaasLayoutComponent, children: [
      { path: '', loadChildren: '../app/modules/waas/waas.module#WaasModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
