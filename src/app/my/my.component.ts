import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent implements OnInit {
  @Input() name: string="Лабораторні роботи";
  constructor() { }

  ngOnInit() {}

}
