import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  a:number;
  b:number;
  c:number;
  d:number;
  constructor() {}
  ras(a:string, b:string, c:string)
  {
    this.a=parseFloat(a);
    this.b=parseFloat(b);
    this.c=parseFloat(c);
    this.d=1;
    if((this.a>10)&&(this.a<15)){
      this.d=this.d*this.a;
    }
    if((this.b>10)&&(this.b<15)){
      this.d=this.d*this.b;
    }
    if((this.c>10)&&(this.c<15)){
      this.d=this.d*this.c;
    }
  }
}
