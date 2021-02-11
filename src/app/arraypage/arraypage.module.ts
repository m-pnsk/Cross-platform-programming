import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArraypagePageRoutingModule } from './arraypage-routing.module';

import { ArraypagePage } from './arraypage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArraypagePageRoutingModule
  ],
  declarations: [ArraypagePage]
})
export class ArraypagePageModule {}
