import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu()
    this.initializeApp();
  }

  sideMenu(){
    this.navigate = 
    [
      {
        title: 'Лабораторна робота №1',
        url:'/home',
        icon:'home'
      },
      {
        title:'Лабораторна робота №2',
        url: '/graph',
        icon: 'analytics'
      },
      {
        title:'Лабораторна робота №3',
        url: '/file',
        icon: 'code-slash-outline'
      },
      {
        title:'Лабораторна робота №4',
        url: '/abstract-class',
        icon: 'contract-outline'
      },
      {
        title:'Лабораторна робота №6',
        url: '/interfacepage',
        icon: 'contract-outline'
      },
      {
        title:'Лабораторна робота №7',
        url: '/servicepage',
        icon: 'contract-outline'
      },
      {
        title:'Лабораторна робота №8',
        url: '/observablepage',
        icon: 'contract-outline'
      }
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
