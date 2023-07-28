import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPrintComponent } from './ngx-print/ngx-print.component';
import { NgxPrintModule } from 'ngx-print';
import { ImageStyleComponent } from './image-style/image-style.component';
@NgModule({
  declarations: [
    AppComponent,
    NgxPrintComponent,
    ImageStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
