import { Injectable } from '@angular/core';
import { TheaterList } from './TheaterList';
import { Theater } from './Theater';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currenTheater=DEFAULT_THEATER;
  theater$: BehaviorSubject<Theater>=new BehaviorSubject<Theater>(DEFAULT_THEATER);
  setTheater(theater:Theater){
    console.log("Є зміни!!!");
    this.theater$.next(theater);
  }
  constructor() { }
}
const DEFAULT_THEATER={"id":0, "name":"Одеський"};