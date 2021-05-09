import { Component, NgModule, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { ActorList } from './service/ActorList';
import { TheaterList } from './service/TheaterList';
import { Theater } from './service/Theater';
import { ConfigService } from './service/config.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Actor } from './service/Actor';
@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})
export class ObservablepagePage implements OnInit {

  theaters=new TheaterList();
  private subscription: Subscription[]=[];
  private configService=new ConfigService();
  actorList=new ActorList(this.configService);
  theater:Theater;
  count=0;
  constructor() { }

  ngOnInit() {
    const theaterSub = this.configService.theater$.subscribe(()=>{
      this.theater=this.configService.theater$.value;
    });
    this.subscription.push(theaterSub);
  }
  nextTheater(){
    if(this.count<this.theaters.theater.size-1){
      this.count++;
    }
    else this.count=0;
    this.configService.setTheater(this.theaters.theater.get(this.count));
  }  
  addActor(name){
    let actor=new Actor();
    actor.name=name;
    actor.idTH=this.theater.id;
    this.actorList.add(actor);
  }

  addTheater(theater){
    let flag=false;
    this.theaters.theater.forEach((el)=>{
      if(el.name==theater){
        flag=true;
      }
    });
    if(!flag){
      let t = new Theater();
      t.id=this.theaters.theater.size;
      t.name=theater;
      this.theaters.add(t);
    }
  }
  ngOnDestroy(){
    this.subscription.forEach(s=>s.unsubscribe());
  }
}
