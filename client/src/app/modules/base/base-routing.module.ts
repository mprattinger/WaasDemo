import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RmnComponent } from './rmn/rmn.component';
import { RmnLayoutComponent } from './layout/rmn-layout.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', component: RmnLayoutComponent, children: [
    { path: '', component: RmnComponent },
    { path: 'main', component: MainComponent },
    { path: '**', redirectTo: '' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
