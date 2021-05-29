import { RecursionService } from './service/recursion/recursion.service';
import { SeriesService } from './service/series/series.service';
import { TabService } from './service/tab/tab.service';
import {Chart} from 'chart.js';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {
  @ViewChild('lineCanvas') private linecanvas: ElementRef;
  @ViewChild('lineCanvas1') private linecanvas1: ElementRef;
  @ViewChild('lineCanvas2') private linecanvas2: ElementRef;
  LineChart: any;
  xx:string[];
  yy1:number[];
  yy2:number[];
  yy3:number[];
  data=[];
  constructor(private tabService:TabService,
    private seriesService:SeriesService,
    private recursionService:RecursionService) { }
  
  xyTab=new Map();
  xySeries=new Map();
  xyRecursion=new Map();
  xyInput=new Map();
  lineChartMethod(){
    this.LineChart=new Chart(this.linecanvas.nativeElement,{
      type:'line',
      data:{
        labels: this.xx,
        datasets:[{
          label:'Графік функції',
          fill:false,
          data:this.yy1,
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
    this.LineChart=new Chart(this.linecanvas1.nativeElement,{
      type:'line',
      data:{
        labels: this.xx,
        datasets:[{
          label:'Графік функції',
          fill:false,
          data:this.yy2,
          borderColor:'rgb(139,0,0)',
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
    this.LineChart=new Chart(this.linecanvas2.nativeElement,{
      type:'line',
      data:{
        labels: this.xx,
        datasets:[{
          label:'Графік функції',
          fill:false,
          data:this.yy3,
          borderColor:'rgb(0,0,129)',
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
  input(){
    this.xx=new Array();
    this.yy1=new Array();
    this.yy2=new Array();
    this.yy3=new Array();
    this.xyTab.forEach((value, key, map)=>{
      let s='';
      let y:number=0;
      y=value;
      this.yy1.push(parseFloat(y.toFixed(1)));
      s=y.toFixed(4)+" ";
      y=this.xySeries.get(key);
      this.yy2.push(parseFloat(y.toFixed(1)));
      s=s+y.toFixed(4);
      y=this.xyRecursion.get(key);
      this.yy3.push(parseFloat(y.toFixed(1)));
      s=s+" "+y.toFixed(4);
      let x=key;
      this.xx.push(x.toFixed(1));
      this.xyInput.set(Math.floor(x*100)/100,s);
    })
  }
  ngOnInit() {  }

  ras(xn:string, xk:string, h:string){
    let xn1=parseFloat(xn),
        xk1=parseFloat(xk),
        h1=parseFloat(h);
        console.log("Табулювання");
      this.xyTab=this.tabService.getTab(xn1,xk1,h1);
      console.log("Ряд");
      this.xySeries=this.seriesService.getTab(xn1,xk1,h1);
      console.log("Рекурсія");
      this.xyRecursion=this.recursionService.getTab(xn1, xk1, h1);
      this.input();
      this.lineChartMethod();
  }
}
