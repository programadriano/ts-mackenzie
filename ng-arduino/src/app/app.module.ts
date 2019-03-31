import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LedsService } from './services/leds.service';
import { HttpModule } from '@angular/http';
import { HttpUtilService } from './services/http-util-service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LedsService, HttpUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
