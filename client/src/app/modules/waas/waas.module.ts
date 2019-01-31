import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaasRoutingModule } from './waas-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    WaasRoutingModule
  ]
})
export class WaasModule { }
