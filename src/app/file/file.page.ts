import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  data: any=[];
  bDay: Date;
  showDetails:boolean[]=new Array(1000).fill(false);
  dataUrl= 'https://api.jsonbin.io/b/602bae120665b21b00b8062b/3';
  loading: any;
  
  constructor(public loadingController:LoadingController) {    
  }

  async load()
  {
    this.loading = await this.loadingController.create({
      spinner:"bubbles",
      message:'Loading...'
    });

    await this.loading.present();

    fetch(this.dataUrl).then(res => res.json())
    .then(json=>{
      this.data=json;
      console.log(this.data);
      this.searchDate();
      this.loading.dismiss();
    });
  }
  toggleDetails(i:number){
    if(this.showDetails[i]){
      this.showDetails[i]=false;
    }
    else{
      this.showDetails[i]=true;
    }
  }
  
  searchDate(){
    for(let i=0; i<this.data.length;i++){
      this.bDay = this.data[i]["bday"];
      console.log(this.bDay);
      console.log(this.data[i]["bday"]);
      for(let j=0; j<this.data.length;j++){
        if(j==i) continue;
        if(this.bDay==this.data[j]["bday"]) break;
      }
    }
  }
  getGreenColor(a:Date, b:Date){
   return a == b ? 'green':'';
  }
  ngOnInit() {
  }

}
