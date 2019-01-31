import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaasRoutingModule } from './waas-routing.module';
import { HomeComponent } from './home/home.component';
import { WaasLayoutComponent } from './layout/waas-layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    WaasLayoutComponent
  ],
  imports: [
    CommonModule,
    WaasRoutingModule
  ]
})
export class WaasModule { }
