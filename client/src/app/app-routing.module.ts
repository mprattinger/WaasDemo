import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { RmnLayoutComponent } from './layouts/rmn-layout/rmn-layout.component';
import { RmnComponent } from './rmn/rmn.component';

const routes: Routes = [
  { path: 'home', component: HomeLayoutComponent, children: [
    // { path: '', component: HomeComponent },
  ] },
  {
    path: '', component: RmnLayoutComponent, children: [
      { path: '', component: RmnComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
