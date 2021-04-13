import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilePageRoutingModule } from './file-routing.module';

import { FilePage } from './file.page';
import {MyComponent} from './../my/my.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilePageRoutingModule
  ],
  declarations: [FilePage, MyComponent]
})
export class FilePageModule {}
