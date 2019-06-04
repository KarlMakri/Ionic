import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Producer } from './../../models/Producer';
import { ProducerService } from './../producer.service';

import { ModalController } from '@ionic/angular';
// import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = 'Titre par Défaut'
  count: number = 0
  
  producers: Producer[];

  constructor(
    public alertController: AlertController,
    public router: Router,
    public producerService: ProducerService,

    public modalController: ModalController
    ) {
    // this.test()
    // this.producers = ['Bio Coop', 'Miheala Miam Miam', 'Jardion des délices'];
    this.producers = this.producerService.getProducers();
    // console.log(this.producerService);
    

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: 'BRAVO !',
      buttons: ['OK']
    });

    await alert.present();
  }

  test(){
    this.title = 'Nouveau titre'
    // this.count = this.count +1;
  }

  increment(){
    this.count += 1;
    if(this.count == 15){
      this.presentAlert()
    }
  }

  decrement(){
    this.count -= 1;
    if(this.count == 15){
      this.presentAlert()
    }
  }

  goTo(){
    // Utiliser le router angular pour charger la page help
    // console.log(this.router)
    this.router.navigate(['/help'])
  }

}
