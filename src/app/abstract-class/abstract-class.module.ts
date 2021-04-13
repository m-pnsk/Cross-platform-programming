import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbstractClassPageRoutingModule } from './abstract-class-routing.module';

import { AbstractClassPage } from './abstract-class.page';
import {MyComponent} from './../my/my.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbstractClassPageRoutingModule
  ],
  declarations: [AbstractClassPage, MyComponent]
})
export class AbstractClassPageModule {}
