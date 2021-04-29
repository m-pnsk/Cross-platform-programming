import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show: IShow;
  constructor() { }
  ngOnInit() {
  }

  task(){
  var t=getRandomInt(3);
    if(t==0){
    return "Написати ПЗ для марсохода ";
    }
    else if(t==1){
      return "Налаштувати мережу на ФІТ ";
    }
    else {
      return "Створити дизайн сайту КІС ";
    }
  }

  ras(){
    this.show=new ShowConsole();
    let trial=new Trial("Випробування 1", 75, this.task(), this.show);
    trial.scoff();
    let fExam = new FinalExam("Крос-платформне програмування", 90, this.show);
    fExam.scoff();
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random()*Math.floor(max));
}
interface ITest{
  subject:string;
  point:number;
}
interface IScoff{
  scoff();
}
interface IShow{
  show(s:string);
}
export class ShowConsole implements IShow{
  show(s:string){
    console.log(s);
  }
}
export class Trial implements ITest, IScoff{
  subject:string;
  point:number;
  task:string;
  constructor(subject:string, point:number, task:string, shower:IShow){
    this.subject=subject;
    this.point=point;
    this.task=task;
    shower.show("Випробування з " + this.subject+" Бали: "+ this.point+ " Завднная " + this.task);
  }
  scoff(){
    console.log("Мене проходять для вступу");
  }
}
abstract class Exam implements ITest{
  subject:string;
  point:number;
    constructor(subject:string, point:number){
      this.subject=subject;
      this.point=point;
    }
}
export class FinalExam extends Exam implements IScoff{
 
  constructor (subject:string, point:number, shower:IShow){
    super(subject,point);
    shower.show("Екзамен з: " + this.subject + " Бали:" + this.point);
  }
  scoff(){
    console.log("Мене складають для випуску");
  }
}