import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  formValidators: FormGroup;
  errorMessage: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: FirebaseAuthService,
    private overlayService: OverlayService
  ) { }

  ngOnInit() {
    this.formValidators = this.fb.group({
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

  loginUser(value){
    this.authService.loginUser(value)
    .then(res => {
      this.overlayService.toast({
        message: 'Login feito com sucesso!'
      })
      this.router.navigate(['/contacts-view'])
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
