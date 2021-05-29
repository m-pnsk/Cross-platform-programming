import { ConfigService } from './config.service';
import { Actor } from './Actor';
export class ActorList{
    actorList=new Array();
    searchActor=new Array();
    theaterSub=this.configService.theater$.subscribe(()=>{
        let theater=this.configService.theater$.value;
        this.search(theater.id);
    });
    constructor(private configService:ConfigService){   }
    add(actor:Actor){
        this.actorList.push(actor);
        this.search(actor.idTH);
    }
    search(idTH){
        this.searchActor=this.actorList.filter((actor)=>
            {   return actor.idTH==idTH;    }
        );
    }
}