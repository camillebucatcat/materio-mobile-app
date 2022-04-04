import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'My Friends',
        icon: 'people-outline',
        cssClass: 'Editicon',
        handler: () => {
          console.log('Friends clicked');
        }
      }, {
        text: 'My Cards',
        icon: 'wallet-outline',
        cssClass: 'Editicon',
        handler: () => {
          console.log('Cards clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close-circle-outline',
        role: 'cancel',
        cssClass: 'closeicon',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}

