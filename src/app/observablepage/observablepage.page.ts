import { Component, NgModule, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { ActorList } from './service/ActorList';
import { TheaterList } from './service/TheaterList';
import { Theater } from './service/Theater';
import { ConfigService } from './service/config.service';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Actor } from './service/Actor';
import { FirebaseService } from './service/firebase.service';
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
  bdActor='Actor';
  bdTheater="Theater";
  constructor(public fbService:FirebaseService) { }

  ngOnInit() {
    this.fetchTask(this.bdActor,true);
    let taskRes=this.fbService.getRecordList(this.bdActor,true);
    taskRes.snapshotChanges().subscribe(res=>{
      this.actorList.actorList=[];
        res.forEach(item=>{
        let a = item.payload.toJSON();
        a['$key']=item.key;
        this.actorList.actorList.push(a as Actor);
      }) 
    });

    this.fetchTask(this.bdTheater,false);
    let taskRes1=this.fbService.getRecordList(this.bdTheater,false);
    taskRes1.snapshotChanges().subscribe(res=>{
      res.forEach(item=>{
      let b = item.payload.toJSON();
      b['$key']=item.key;
      this.theaters.theater.push(b as Theater);
      this.theater=this.theaters.theater[this.count];
      this.actorList.search(this.theater.id);
    })})

    const theaterSub = this.configService.theater$.subscribe(()=>{
      this.theater=this.configService.theater$.value;
    });
    this.subscription.push(theaterSub);
  }
  fetchTask(bd,op){
    this.fbService.getRecordList(bd,op).valueChanges().subscribe();
  }
  deleteActor(id){
    this.fbService.deleteActor(id);
      for(let i=0; i<this.actorList.actorList.length; i++){
          if(this.actorList.actorList[i].$key==id){
             delete this.actorList.actorList[i]; 
          }
      }
      this.actorList.search(this.theater.id);
  }
  nextTheater(){
    if(this.count<this.theaters.theater.length-1){
      this.count++;
    }
    else this.count=0;
    this.configService.setTheater(this.theaters.theater[this.count]);
  }  
  addActor(first_name, last_name, bDay, rank, experience){
    let actor=new Actor();
    actor.first_name=first_name;
    actor.last_name=last_name;
    actor.bDay=bDay;
    actor.rank=rank;
    actor.experience=experience;
    actor.idTH=this.theater.id;
    this.fbService.createActor(actor);
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
      t.id=this.theaters.theater.length;
      t.name=theater;
      this.fbService.createTheater(t);
    }
  }
  ngOnDestroy(){
    this.subscription.forEach(s=>s.unsubscribe());
  }
}
