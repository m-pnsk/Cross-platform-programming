import { PropertyWrite } from '@angular/compiler';
import { newArray } from '@angular/compiler/src/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  @ViewChild('lineCanvas') private linecanvas: ElementRef;
  LineChart: any;
  xn:number;
  xk:number;
  a:number;
  h:number;
  xx:string[];
  yy:number[];
  data=[];
  constructor() {}
  ngOnInit(){
  }
  lineChartMethod(){
    this.LineChart=new Chart(this.linecanvas.nativeElement,{
      type:'line',
      data:{
        labels: this.xx,
        datasets:[{
          label:'Графік функції',
          fill:false,
          data:this.yy,
          borderColor:'rgb(38,194,129)',
          borderWidth:1
        }]
      },
      options:{
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
  graphras(xn:string, xk:string, a:string, h:string)
  {
    this.xn=parseFloat(xn);
    this.xk=parseFloat(xk);
    this.a=parseFloat(a);
    this.h=parseFloat(h);
    let y:number, x:number;
    this.xx=new Array();
    this.yy=new Array();
   for(x=this.xn; x<=this.xk; x+=this.h){
    if(x<=0){
      y=Math.sin(x+3)/(Math.pow(x,5)*(1/Math.tan(2*x*x*x)));
    }
    else if(x>this.a){
      y=(Math.pow(Math.sin(x+5),2))/(Math.pow((Math.abs(x)+2),1/3)-1);
    }
    else y=(Math.abs(x)+2)/(Math.pow((Math.cos(Math.pow((x*x*x+2*x+1),2))),2));
    this.xx.push(x.toFixed(1));
    this.yy.push(parseFloat(y.toFixed(1)));
    
   }
   console.log(this.xx);
   console.log(this.yy);
   this.lineChartMethod();
  }
}
