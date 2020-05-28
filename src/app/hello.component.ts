import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-comp',
  template: `
    <div id="content">
      <div id="contentInside" *ngFor="let container of containers"></div>
      <button (click)="add()">Add</button>
    </div>
  `,
  styles: [`
    #content{
      width:100%;
      height:90px;
      border:1px solid black;
    }
    #contentInside{
      width:100px;
      height:70px;
      margin:7px;
      border:1px solid black;
      display:inline-flex;
    }
  `]
})

export class HelloComponent {

  containers = [];

  constructor() { }

  add() {
    this.containers.push(this.containers.length);
  }
}