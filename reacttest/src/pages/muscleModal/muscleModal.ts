import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'modal-content.html'
})
export class ModalPage {
  muscle: string;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams
  ) {
    this.muscle = params.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
