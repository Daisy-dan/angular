import { Component } from '@angular/core';

@Component({
  selector: 'keyup-enter',
  template: `
    <p>keyupEnterComponent</p>
    <!--<input #box3 (keyup.enter)="onEnter(box3.value)">-->
    <input #box3 (keyup.enter)="update(box3.value)" (blur)="update(box3.value)">
    <p>{{value}}</p>
`,
  styleUrls: ['./app.component.css']
})
export class keyupEnterComponent{
  value = '';
  // onEnter(value: string){
  //   this.value = value;
  // }
  update(value: string){this.value = value;}
}
