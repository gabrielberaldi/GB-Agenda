import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-logout-button',
  template: `
    <ion-buttons>
      <ion-button (click)="logout()">
        Sair
        <ion-icon name="exit" title="Sair"></ion-icon>
      </ion-button>
    </ion-buttons>
  `
})
export class LogoutButtonComponent implements OnInit {

  constructor( 
    private authService: FirebaseAuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private overlayService: OverlayService
     ) { }

  ngOnInit() {}
  
  async logout(){
    const alert = await this.alertCtrl.create({
      message:'Deseja sair do aplicativo ?',
      buttons: [
        {
          text: 'Sim',
          handler: () =>{
            this.authService.logoutUser();
            this.router.navigate(['/sign-in'])
            this.overlayService.toast({
              message: 'Logout feito com sucesso!'
            })
          },
        },
        {
          text: 'Não',
          role: 'cancel',
          handler: blah =>{
            console.log('Confirm cancel: blah');
          },
        },
      ]
    });
    await alert.present();
  }

}
