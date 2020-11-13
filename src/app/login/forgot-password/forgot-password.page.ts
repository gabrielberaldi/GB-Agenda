import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AlertController } from '@ionic/angular';
import { OverlayService } from 'src/app/services/overlay.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string = '';

  constructor(
    private afu: AngularFireAuth,
    private overlayService: OverlayService
    ) { }

  ngOnInit() {
    
  }

   recoverPassword(){
    this.afu.sendPasswordResetEmail(this.email)
      .then(data =>{
        console.log(data);
        this.overlayService.toast({
          message:'As intruções para o reset de senha foram enviadas para o email cadastrado, por favor, verifique sua caixa de spam.',
          position: 'middle',
          duration: 10000,
          buttons: [{
            text:'Ok'
          }]
        })
      })
      .catch(err =>{
        console.log(`failed ${err}`);
      });

  }

}
