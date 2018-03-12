import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal-content.html'
})
export class ModalPage {
  muscle: string;
  segment: string = "score";

  constructor(
    public viewCtrl: ViewController,
    params: NavParams
  ) {
    this.muscle = params.get('myParam');
  }

  infoSegment() {
    this.segment = "info";
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
