import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroesNames: string[]=['Superman','Ironman','Thor','Spiderman'];
public heroeBorrado?:string;

removeLastHero():void{
  this.heroeBorrado=this.heroesNames.pop();
}
}
