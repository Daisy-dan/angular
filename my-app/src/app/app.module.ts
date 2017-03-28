import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { LoopbackComponent } from './loop-back.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    LoopbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ClickMeComponent,
    LoopbackComponent
  ]
})
export class AppModule { }
