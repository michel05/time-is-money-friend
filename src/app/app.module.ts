import { AuctioModule } from './wow/auction/auction.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule, BrowserModule, AuctioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
