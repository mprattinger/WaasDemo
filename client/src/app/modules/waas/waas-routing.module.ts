import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WaasLayoutComponent } from './layout/waas-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: WaasLayoutComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaasRoutingModule { }
