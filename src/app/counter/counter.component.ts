import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <hr>
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy()">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decreaseBy()">-1</button>`
})

export class CounterComponent{
  public counter:number=10;
  increaseBy(){
    this.counter+=1;
  }
  decreaseBy(){
    this.counter-=1;
  }
  reset(){
    this.counter=10;
  }
  constructor() { }


}
