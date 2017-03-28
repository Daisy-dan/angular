// 局部模板变量
import { Component } from '@angular/core';

@Component({
  selector: 'loop-back',
  template: `
    <p>局部模板变量</p>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class LoopbackComponent { }
