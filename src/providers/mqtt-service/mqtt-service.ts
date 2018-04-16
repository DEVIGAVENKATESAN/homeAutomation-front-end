// import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import AWSMqtt from 'aws-mqtt-client';
import {config} from "./config";

/*
  Generated class for the MqttServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MqttServiceProvider {

  public light = {
    name: "Hall Light",
    topic: "hall/light",
    status: true,
    on: "On",
    off: "Off"
  }

  public fan = {
    name: "Hall Fan",
    topic: "hall/fan",
    status: true,
    on: "On",
    off: "Off"
  }

  public lightSensor = {
    name: "Hall Fan",
    topic: "hall/lightSensor",
    status: true,
    on: "On",
    off: "Off",
    range:5
  }

  mqttClient : AWSMqtt;
  constructor() {
    console.log('Hello MqttServiceProvider Provider');
    this.initMqtt();
  }

  initMqtt() {
    this.mqttClient = new AWSMqtt(config);
    this
      .mqttClient
      .on('connect', () => {

        console.log('connected to iot mqtt websocket');
        // this   .mqttClient   .publish('test-topic', "message from ionic");
      });

      try{
        this.mqttClient.on('message', (topic, message) => {

          if(topic == this.light.topic) {
            if(message == "on") {
              this.light.status = true;

            } else  if(message == "off") {
              this.light.status = false;

            }
          }
          console.log(message.toString());
        });
      }
      catch(error){
        console.log("error occured",error)
      }
  }

  subscribeTopic(topicName) {
    this
      .mqttClient
      .subscribe(topicName);
  }

  publishData(device) {
    console.log("received data", device);
    const message = device.status
      ? "on"
      : "off";
    this.publishTopic(device.topic, message);
  }
  publishTopic(topic, message) {
    this
      .mqttClient
      .publish(topic, message);
  }
}
