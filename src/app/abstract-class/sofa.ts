import {Furniture} from './furniture'
export class Sofa extends Furniture
{
  constructor(public naz:string, public VS:number){
    super();
  }

  Price(){
    this.C=((this.VS*this.VS)/3)+5000;
  }
}