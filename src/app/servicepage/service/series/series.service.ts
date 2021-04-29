import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy=new Map();
  constructor(@Optional() private logService:LogService) 
  { }
  getSeries(x:number){
    let sum:number=Math.PI/2,
    sum1=Math.cos(x),
    min=1E-12,
    mem, 
    n=1;
    do
    {
      n+=2;
      mem=Math.cos(n*x)/(n*n); 
      sum1+=mem;
    }
    while(mem>min||mem<-min);
    sum=sum-(4/Math.PI)*sum1;
    return sum;
  }
getTab(xn:number=0.1, xk:number=3.14, h:number=0.1):Map<number,number>
   {
    let x=xn,
    y=0.0;
    while(x<=xk){
      y=this.getSeries(x);
      this.xy.set(x,y);
      if(this.logService)
        this.logService.write("x="+x.toFixed(2)+" y="+y.toFixed(4));
      x=x+h;
    }
    return this.xy;
   }
  }