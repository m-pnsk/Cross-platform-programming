import { ConfigService } from './config.service';
import { Actor } from './Actor';
export class ActorList{
    private actorList=new Array();
    private searchActor=new Array();
    searchActorResult:string[];
    theaterSub=this.configService.theater$.subscribe(()=>{
        let theater=this.configService.theater$.value;
        this.search(theater.id);
    });
    constructor(private configService:ConfigService){
        let actor=new Actor();
        actor.name="Василь Навротський";
        actor.idTH=0;
        this.add(actor);
        let actor1=new Actor();
        actor1.name="Ольга Бакус";
        actor1.idTH=1;
        this.add(actor1);
        this.search(0);
    }
    add(actor:Actor){
        this.actorList.push(actor);
        this.search(actor.idTH);
    }
    search(idTH){
        this.searchActor=this.actorList.filter((actor)=>
            {   return actor.idTH==idTH;    }
        );
        this.searchActorResult=[];
        this.searchActor.forEach(el=>{
            this.searchActorResult.push('Ім\'я '+el.name);
        });
    }
}