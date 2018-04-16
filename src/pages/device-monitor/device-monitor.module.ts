import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceMonitorPage } from './device-monitor';
import {MqttServiceProvider} from "../../providers/mqtt-service/mqtt-service";

@NgModule({
  declarations: [
    DeviceMonitorPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceMonitorPage),
  ],
  providers:[MqttServiceProvider]
})
export class DeviceMonitorPageModule {}
