import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigureDevicePage } from './configure-device';

@NgModule({
  declarations: [
    ConfigureDevicePage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigureDevicePage),
  ],
})
export class ConfigureDevicePageModule {}
