import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { NgZone  } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ItemSliding, ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'routine.html'
})
export class RoutinePage {
  dayOfWeek = this.getWeekday();
  items = [
    {
      'name': "Bench Press",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Bench-press-1.png',
      'pk': 1
    },
    {
      'name': "Squat",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Squats-2-2.png',
      'pk': 2
    },
    {
      'name': "Bench Press",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Bench-press-1.png',
      'pk': 3
    },
    {
      'name': "Squat",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Squats-2-2.png',
      'pk': 4
    },
    {
      'name': "Bench Press",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Bench-press-1.png',
      'pk': 5
    },
    {
      'name': "Squat",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Squats-2-2.png',
      'pk': 6
    },
    {
      'name': "Bench Press",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Bench-press-1.png',
      'pk': 7
    },
    {
      'name': "Squat",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Squats-2-2.png',
      'pk': 8
    },
    {
      'name': "Bench Press",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Bench-press-1.png',
      'pk': 9
    },
    {
      'name': "Squat",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Squats-2-2.png',
      'pk': 10
    },
    {
      'name': "Deadlift",
      'sets': "3",
      'reps': "5",
      'weight': "225",
      'unit': "lb",
      'image': '../../assets/imgs/Dead-lifts-2-2.png',
      'pk': 11
    }
  ];

  constructor(private zone: NgZone,
              public events: Events,
              public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public plt: Platform) {
    this.plt.ready().then((readySource) => {
      this.showToast("Swipe left or right for more options");
      console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code
    });
  }

   getWeekday() {
      let d = new Date();
      let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return weekday[d.getDay()];
  }

  presentLoading(time) {
    let loader = this.loadingCtrl.create({
      content: "Loading...",
      duration: time
    });
    loader.present();
  }

  download(item: ItemSliding) {
    this.expandAction(item, 'downloading', 'Login was downloaded.');
  }

  expandAction(item: ItemSliding, _: any, text: string) {
    let toast = this.toastCtrl.create({
      message: item['name'] + " has been removed from today's workout",
      duration: 2000,
      position: 'top',
    });

    this.closeCard(item);
    toast.present();

  }

  closeCard(item) {
    console.log("inside close card ", item);

    for(var i=0; i < this.items.length; i++){
      if(this.items[i].pk == item.pk){
        this.items.splice(i,1);
      }
    }
    this.presentLoading(100);
    this.zone.run(() => {
      console.log('enabled time travel');
    });
  }

  completeClick(pk) {
    console.log("clicked ", pk);
    this.closeCard(pk);
  }

  modifyClick(pk) {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'Sets',
          placeholder: 'Sets',
        },
        {
          name: 'Reps',
          placeholder: 'Reps',
        },
        {
          name: 'Weight',
          placeholder: 'Weight',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked ', data);
            this.closeCard(pk);
          }
        }
      ]
    });
    prompt.present();
  }


  showToast(message: string) {
    const toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok',
      duration: 3000,
    });

    toast.present(toast);
  }

  completeExercise(item) {
    //ajax update db
    this.closeCard(item);
  }

  editExercise(item) {
    console.log("edit exercise");
  }

  infoExercise(item) {
    console.log("redirect to exercise page")
  }



}
