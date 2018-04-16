import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MqttServiceProvider} from "../../providers/mqtt-service/mqtt-service";

/**
 * Generated class for the DeviceMonitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-monitor',
  templateUrl: 'device-monitor.html',
})
export class DeviceMonitorPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public mqtt:MqttServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceMonitorPage');
  }

}
