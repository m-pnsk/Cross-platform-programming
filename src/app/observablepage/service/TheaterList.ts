import { Theater } from './Theater'
export class TheaterList{
    theater=new Array();
    constructor(){
    }
    add(theater:Theater){
        this.theater.push(theater);
    }
}