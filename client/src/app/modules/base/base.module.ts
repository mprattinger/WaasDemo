import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { RmnComponent } from './rmn/rmn.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    RmnComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    ReactiveFormsModule
  ]
})
export class BaseModule { }
