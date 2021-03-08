import {Furniture} from './furniture'
export class Wardrobe extends Furniture
{
  constructor(public naz:string, public VS:number){
    super();
  }

  Price(){
    this.C=75*this.VS;
  }
}