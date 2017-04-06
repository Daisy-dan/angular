import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { LoopbackComponent } from './loop-back.component';
import { keyupEnterComponent } from './keyupEnter.components';
import { AddHeroList } from '../addHeroList/add';
import { Ng2Echarts } from 'ng2-echarts';
import { EchartsComponent } from './echarts.component';

@NgModule({
  declarations: [
    Ng2Echarts,
    AppComponent,
    ClickMeComponent,
    LoopbackComponent,
    keyupEnterComponent,
    AddHeroList,
    EchartsComponent
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
    LoopbackComponent,
    keyupEnterComponent,
    AddHeroList,
    EchartsComponent
  ]
})
export class AppModule { }
