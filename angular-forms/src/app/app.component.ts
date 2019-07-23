import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
<div class="container">
    <a routerLink="/city" routerLinkActive="active">link1</a>
    <a routerLink="/hero-detail">link2</a>
    <!--<hero-detail></hero-detail>-->
  </div>
  <router-outlet></router-outlet>
<!--<city-select></city-select>-->
`
})
export class AppComponent { }
