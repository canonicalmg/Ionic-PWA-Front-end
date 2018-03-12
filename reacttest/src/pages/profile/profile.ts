import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { ModalPage } from '../muscleModal/muscleModal';


@Component({
  selector: 'page-contact',
  templateUrl: 'profile.html'
})
export class ContactPage {
  muscleOrExercise = "Muscle";
  muscles = [];
  exercises = [];
  myParam = "";
  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController,
              public plt: Platform,
              public modalCtrl: ModalController) {
    this.plt.ready().then((readySource) => {
      this.showMuscleView();
      console.log('Platform ready from', readySource);
      // Platform now ready, execute any required native code
    });
  }

  openModalWithParams(item) {
    let myModal = this.modalCtrl.create(ModalPage, { 'myParam': item });
    myModal.present();
  }

  populateMuscles() {
    //beginner(0,1), novice(1,2), intermediate(2,3), advanced(3,4), elite(4,5)
    this.muscles = [
      {
        'name': "Biceps",
        'score': "2.9",
        'score_verbose': 'Intermediate',
        'status': "Needs Attention",
        'image': "assets/imgs/bodyMap/biceps.png",
        'exercises': {
          'major': [
            {
              'name': "Bench Press",
              'image': "assets/imgs/Bench-press-1.png"
            }
          ],
          'minor': [
            {
              'name': "Bench Press",
              'image': "assets/imgs/Bench-press-1.png"
            },
            {
              'name': "Squat",
              'image': "assets/imgs/Squats-2-2.png"
            },
            {
              'name': "Deadlift",
              'image': "assets/imgs/Dead-lifts-2-2.png"
            }
          ]
        }
      },
      {
        'name': "Triceps",
        'score': "4.8",
        'score_verbose': 'Elite',
        'status': "Okay",
        'image': "assets/imgs/bodyMap/triceps.png",
        'exercises': {
          'major': [
            {
              'name': "Bench Press",
              'image': "assets/imgs/Bench-press-1.png"
            }
          ],
          'minor': [
            {
              'name': "Bench Press",
              'image': "assets/imgs/Bench-press-1.png"
            },
            {
              'name': "Squat",
              'image': "assets/imgs/Squats-2-2.png"
            },
            {
              'name': "Deadlift",
              'image': "assets/imgs/Dead-lifts-2-2.png"
            }
          ]
        }
      },
      {
        'name': "Pectorials",
        'score': "4.2",
        'score_verbose': 'Elite',
        'status': "Okay",
        'image': "assets/imgs/bodyMap/chest.png",
        'exercises': {
          'major': [
            {
              'name': "Bench Press",
              'image': "assets/imgs/Bench-press-1.png"
            }
          ],
          'minor': [
            {
              'name': "Bench Press",
              'image': "assets/imgs/Bench-press-1.png"
            },
            {
              'name': "Squat",
              'image': "assets/imgs/Squats-2-2.png"
            },
            {
              'name': "Deadlift",
              'image': "assets/imgs/Dead-lifts-2-2.png"
            }
          ]
        }
      },
      {
        'name': "Traps",
        'score': "2.1",
        'score_verbose': 'Intermediate',
        'status': "Needs Attention",
        'image': "assets/imgs/bodyMap/traps.png",
        'exercises': {
          'major': [
            {
              'name': "Bench Press",
              'image': "assets/imgs/Bench-press-1.png"
            }
          ],
          'minor': [
            {
              'name': "Bench Press",
              'image': "assets/imgs/Bench-press-1.png"
            },
            {
              'name': "Squat",
              'image': "assets/imgs/Squats-2-2.png"
            },
            {
              'name': "Deadlift",
              'image': "assets/imgs/Dead-lifts-2-2.png"
            }
          ]
        }
      },
      {
        'name': "Lats",
        'score': "3.3",
        'score_verbose': 'Advanced',
        'status': "Okay",
        'image': "assets/imgs/bodyMap/lats.png",
        'exercises': {
          'major': [
            {
              'name': "Bench Press",
              'image': "assets/imgs/Bench-press-1.png"
            }
          ],
          'minor': [
            {
              'name': "Bench Press",
              'image': "assets/imgs/Bench-press-1.png"
            },
            {
              'name': "Squat",
              'image': "assets/imgs/Squats-2-2.png"
            },
            {
              'name': "Deadlift",
              'image': "assets/imgs/Dead-lifts-2-2.png"
            }
          ]
        }
      },
    ]
  }

  populateExercises() {
    this.exercises = [
      {'name': "Bench Press"},
      {'name': "Squat"},
      {'name': "Deadlift"},
      {'name': "Bicep Curl"},
      {'name': "Weighted Pull-Over"},
      {'name': "Dumbbell Tricep Extension"}
    ]
  }

  showMuscleView() {
    this.muscleOrExercise = "Muscle";
    this.populateMuscles();
  };

  showExerciseView() {
    this.muscleOrExercise = "Exercise";
    this.populateExercises();
  };


  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select View',
      enableBackdropDismiss: true,
      buttons: [
        {
          text: 'Muscle Stats',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.showMuscleView();
          }
        },{
          text: 'Exercise Stats',
          handler: () => {
            console.log('Archive clicked');
            this.showExerciseView();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            return true;
          }
        }
      ]
    });
    actionSheet.present();
  }

}


