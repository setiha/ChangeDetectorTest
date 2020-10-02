import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { HomeComponent } from './home/home.component';
import { OnePageComponent } from './one-page/one-page.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
import { Test3Component } from './test3/test3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarItemComponent,
    HomeComponent,
    OnePageComponent,
    Test1Component,
    Test2Component,
    Test3Component,
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
