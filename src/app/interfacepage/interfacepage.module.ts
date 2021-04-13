import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfacepagePageRoutingModule } from './interfacepage-routing.module';

import { InterfacepagePage } from './interfacepage.page';
import {MyComponent} from './../my/my.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfacepagePageRoutingModule
  ],
  declarations: [InterfacepagePage, MyComponent]
})
export class InterfacepagePageModule {}
