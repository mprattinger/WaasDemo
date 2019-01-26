import { RmnComponent } from './rmn/rmn.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { RmnLayoutComponent } from './layouts/rmn-layout/rmn-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RmnLayoutComponent,
    HomeLayoutComponent,
    RmnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
