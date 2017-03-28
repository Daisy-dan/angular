import { Component } from '@angular/core';

@Component ({
  selector: 'add-list',
  template: `
    <p>Little Tour Of Heroes</p>
    <input #new (keyup)="onKey()" value="{{value}}">
    <button (click)="addList()">Add</button>
    <!--<p>{{new.value}}</p>-->
    <ul class="lists">
      <li *ngFor="let hero of heroes">{{hero}}</li>
    
    </ul>
`,
  styleUrls: ['./add.css','../app/app.component.css']

})

export class AddHeroList {
  heroes = ['AAA','BBB','CCC'];
  value = '';
  onKey(){
    this.value = (<HTMLInputElement>event.target).value;
  };
  addList(value: string){
    if(this.value){
      this.heroes.push(this.value);
      this.value = '';
      return
    }
  }


}
