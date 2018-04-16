import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import AWSMqtt from 'aws-mqtt-client';
// const mqttClient = new AWSMqtt({
// 	accessKeyId: "AKIAIZL676JY7XEK6HZA",
// 	secretAccessKey: "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",
// 	sessionToken: '',
// 	endpointAddress: "a3cd6yyy4as8ey.iot.us-east-1.amazonaws.com",
// 	region: 'us-east-1'
// });

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  appversion =3;
  // mqttClient = new AWSMqtt({
  //   accessKeyId: "AKIAIZL676JY7XEK6HZA",
  //   secretAccessKey: "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",
  //   sessionToken: '',
  //   endpointAddress: "a3cd6yyy4as8ey.iot.us-east-1.amazonaws.com",
  //   region: 'us-east-1'
  // });

  @ViewChild(Nav) nav: Nav;
  // url={
  //   "endpointAddress": "a3cd6yyy4as8ey.iot.us-east-1.amazonaws.com"}
  // make HelloIonicPage the root (or first) page
  rootPage = 'DeviceMonitorPage';
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    console.log("app version",this.appversion)
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });


  
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
