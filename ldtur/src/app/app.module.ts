import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { Article1Component } from './components/article1/article1.component';
import { Article2Component } from './components/article2/article2.component';
import { Article3Component } from './components/article3/article3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Article1Component,
    Article2Component,
    Article3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
