import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArraypagePageRoutingModule } from './arraypage-routing.module';

import { ArraypagePage } from './arraypage.page';
import {MyComponent} from './../my/my.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArraypagePageRoutingModule
  ],
  declarations: [ArraypagePage, MyComponent]
})
export class ArraypagePageModule {}
