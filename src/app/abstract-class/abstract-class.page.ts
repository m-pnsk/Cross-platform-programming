import { Component, OnInit } from '@angular/core';
import {Furniture} from './furniture';
import {Sofa} from './sofa';
import {Wardrobe} from './wardrobe';
@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {
  avgW:number;
  avgS:number;
  iW:number;
  iS:number;
  furniture:Furniture[];
  constructor() { }

  getRandomInt(max){
    return Math.ceil(Math.random()*Math.floor(max));
  }
  ras(nn:string){
    this.avgS=this.avgW=this.iW=this.iS=0;
    this.furniture=new Array();
    let n=parseInt(nn)

    for(let i=0; i<n;i++){
      if(Math.round(Math.random())){
        this.furniture.push(new Wardrobe("Шафа", this.getRandomInt(30)));
      }
      else{
        this.furniture.push(new Sofa("Диван", this.getRandomInt(10)));
      }
    }
    this.furniture.forEach((element)=>{
      element.Price();
      if(element.naz=="Шафа"){
        this.iW++;
        this.avgW+=element.C;
      }
      else{
        this.iS++;
        this.avgS+=element.C;
      }
      console.log(element.show())
    });
      this.avgW/=this.iW;
      this.avgS/=this.iS;
  }
  ngOnInit() {
  }
}