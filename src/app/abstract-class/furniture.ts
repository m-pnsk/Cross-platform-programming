export abstract class Furniture{
    naz:string;
    VS:number;
    C:number;
    constructor(){}
    show(){
      return "Назва="+this.naz+" "+" Об'єм/Площа="+this.VS.toFixed(2)+" Вартість="+this.C.toFixed(2);
    }   
    abstract Price();
   }