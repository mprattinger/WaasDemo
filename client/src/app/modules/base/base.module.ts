import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { RmnLayoutComponent } from './layout/rmn-layout.component';
import { RmnComponent } from './rmn/rmn.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule, MatGridListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    RmnComponent,
    RmnLayoutComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule
  ]
})
export class BaseModule { }
