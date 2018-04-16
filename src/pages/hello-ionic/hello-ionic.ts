import { Component } from '@angular/core';
import AWSMqtt from 'aws-mqtt-client';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {

  mqttClient = new AWSMqtt({
    accessKeyId: "AKIAIZL676JY7XEK6HZA",
    secretAccessKey: "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",
    sessionToken: '',
    endpointAddress: "a3cd6yyy4as8ey.iot.us-east-1.amazonaws.com",
    region: 'us-east-1'
  });
  constructor() {
    this.mqttClient.on('connect', () => {
      this.mqttClient.subscribe('test-topic');
      console.log('connected to iot mqtt websocket');
      this.mqttClient.publish('test-topic', "message from ionic");
    });
    try{
    this.mqttClient.on('message', (topic, message) => {
      console.log(message.toString());
    });
  }
  catch(error){
    console.log("error occured",error)
  }
  }



  sendMessage(){
    const topic = 'test-topic'
    this.mqttClient.publish(topic,"data from ionic");
  }
}
