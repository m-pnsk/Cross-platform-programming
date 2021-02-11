import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraypage',
  templateUrl: './arraypage.page.html',
  styleUrls: ['./arraypage.page.scss'],
})
export class ArraypagePage implements OnInit {
  a1:number;
  b1:number;
  d1:number;
  constructor() { }

  ngOnInit() {
  }

  ras(a1:string, b1:string)
  {
    this.a1=parseFloat(a1);
    this.b1=parseFloat(b1);
    this.d1=1;
    let i;
    for(i=this.a1; i<=this.b1; i++){
      if(i%6==0 && i!=0){
        this.d1*=i;
      }
    }
  }
}
