import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { AlertOptions, LoadingOptions, ToastOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  async toast(options?: ToastOptions): Promise<HTMLIonToastElement> {
    const toast = await this.toastCtrl.create({
      position: 'top',
      duration: 3000,
      ...options
    });
    await toast.present();
    return toast;
  }

}
