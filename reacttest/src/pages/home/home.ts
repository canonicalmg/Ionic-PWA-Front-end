import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class RoutinePage {
  dayOfWeek = this.getWeekday();
  items = [
    {
      'name': "Squat",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': 'https://profile.actionsprout.com/default.jpeg'
    },
    {
      'name': "Bench",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': 'https://profile.actionsprout.com/default.jpeg'
    },
    {
      'name': "Deadlift",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': 'https://profile.actionsprout.com/default.jpeg'
    }
  ];

  constructor(public navCtrl: NavController) {
  }

   getWeekday() {
      let d = new Date();
      let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return weekday[d.getDay()];
  }



}
