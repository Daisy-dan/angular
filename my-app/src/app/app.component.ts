import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!!!';
  myHero = 'windstorm';
  heroes = [
    new Hero(1,'windstorm'),
    new Hero(13,'bombasto'),
    new Hero(15,'magneta'),
    new Hero(20,'tornado'),
  ];
  heroFist = this.heroes[0]
}
