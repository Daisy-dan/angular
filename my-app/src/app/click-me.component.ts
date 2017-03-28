import { Component } from '@angular/core';


@Component({
  selector: 'click-me',
  template: `
    <p>$event的类型</p>
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}
    <br/>
    
    <!--<input type="text" (keyup)="onKey($event)">-->
    <!--{{values}}-->
    
    <p>模板变量获得输入框</p>
    <input #box2 (keyup)="onKey2(box2.value)">
    {{values2}}
`,
  styleUrls: ['./app.component.css']
})
export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

  values = '';
  values2 = '';

  //$event
  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  // }

  //KeyboardEvent
  // onKey(event: KeyboardEvent){
  //   this.values += (<HTMLInputElement>event.target).value + '|';
  // }


  onKey2(value: string){
    this.values2 += value + '|'
  }
}
