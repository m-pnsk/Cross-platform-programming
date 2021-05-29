import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import {AngularFireList, AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Actor } from './Actor';
import { Theater } from './Theater';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  actorListRef: AngularFireList<any>;
  theaterListRef: AngularFireList<any>;
  bdRef:AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
  createActor(actor:Actor){
    return this.actorListRef.push({
      idTH:actor.idTH,
      first_name:actor.first_name,
      last_name:actor.last_name,
      bDay:actor.bDay,
      rank:actor.rank,
      experience:actor.experience
    })
  }
  createTheater(theater:Theater){
    return this.theaterListRef.push({
      id:theater.id,
      name:theater.name
    })
  }
  getRecord(id:string, bd:string){
    this.bdRef=this.db.object('/'+bd+id);
    console.log("bdRef="+this.bdRef.snapshotChanges());
    return this.bdRef;
  }
  deleteActor(id:string){
    this.bdRef=this.db.object('/Actor/'+id)
    this.bdRef.remove();
  }
  getRecordList(bd:string, op:boolean){
    if(op){
      this.actorListRef=this.db.list('/'+bd);
      return this.actorListRef;
    }
    else {
      this.theaterListRef = this.db.list('/'+bd);
      return this.theaterListRef;
    }
  }
}
