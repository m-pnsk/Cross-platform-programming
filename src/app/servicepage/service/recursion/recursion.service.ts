import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy:number;
  private xy=new Map();
  constructor(@Optional() private logService: LogService) { }
  getRecursion(x:number, n:number, sum:number)
  {
    let min=1E-9, mem;
    n+=2;
    mem=Math.cos(n*x)/(n*n);
    sum+=mem; 
    if(mem>min||mem<-min){
      this.getRecursion(x,n,sum);
    }
    else this.yy=(Math.PI/2)-(4/Math.PI)*sum;
  }
  getTab(xn:number=-3.14, xk:number=3.14, h:number=0.1):Map<number,number>
   {
    let x=xn;
    while(x<=xk){
      let y=Math.cos(x);
      this.getRecursion(x,1,y);
      this.xy.set(x,this.yy);
      if(this.logService)
      this.logService.write("x="+x.toFixed(2)+" y="+this.yy.toFixed(4));
      x=x+h;
    }
    return this.xy;
   }
}