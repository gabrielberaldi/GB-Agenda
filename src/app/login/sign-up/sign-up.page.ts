import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { OverlayService } from 'src/app/services/overlay.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;
  errorMessage: string;
  successMessage: string;
  formValidators: FormGroup;
  

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: FirebaseAuthService,
    private overlayService: OverlayService
  ) { }

  ngOnInit() {
    this.formValidators = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    })
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email requerido.' },
      { type: 'pattern', message: 'Por favor, digite um formato de email válido.' }
    ],
    'password': [
      { type: 'required', message: 'Senha requerida.' },
      { type: 'minlength', message: 'A senha deve possuir no minímo 5 caracteres.' }
    ]
  };

  tryRegister(value){
    this.authService.registerUser(value)
    .then(res => {
      this.overlayService.toast({
        message: 'Usuário criado com sucesso, faça login para continuar.'
      });
      this.router.navigate(['/sign-in'])
    })
    .catch((error: firebase.FirebaseError) => {
      console.log(error)
      let errorCode = error.code
      this.overlayService.toast({
        message: error.message
      })
    })
  }
  
}
  /*signUpWithEmail(){ Teste ------------------------------------
    this.authService.signUpWithEmail(this.signUpForm.value['email'], this.signUpForm.value['password'])
    .then(user =>{
      //navegar para a tela de contatos da aplicação;
      console.log('Usuário criado com sucesso.')
      //this.redirectLoggedUserToContactsPage();
    })
    .catch(error => {
      this.submitError = error.message;
    });
  }

  /*googleSignUP(){
    this.authService.signInWithGoogle()
    .then((result: any) => {
      if (result.additionalUserInfo){
        this.authService.set
      }
    })
  }*/


