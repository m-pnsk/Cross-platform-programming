import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraphPageRoutingModule } from './graph-routing.module';

import { GraphPage } from './graph.page';
import {MyComponent} from './../my/my.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraphPageRoutingModule
  ],
  declarations: [GraphPage, MyComponent]
})
export class GraphPageModule {}
