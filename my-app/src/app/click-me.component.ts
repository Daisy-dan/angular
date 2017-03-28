import { Component } from '@angular/core';


@Component({
  selector: 'click-me',
  template: `
    <p>$event的类型</p>
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}
    <br/>
    <input type="text" (keyup)="onKey($event)">
    {{values}}
`,
  styleUrls: ['./app.component.css']
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  values = '';
  onKey(event: KeyboardEvent){
    this.values += (<HTMLInputElement>event.target).value + '|';
  }
}
