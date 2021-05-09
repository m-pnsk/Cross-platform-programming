import { Theater } from './Theater'
export class TheaterList{
    theater=new Map();
    constructor(){
        this.theater.set(0,{id:0, name:"Одеський"});
        this.theater.set(1,{id:1, name:"Львівський"});
    }
    add(theater:Theater){
        this.theater.set(theater.id,{id:theater.id,name:theater.name});
    }
}