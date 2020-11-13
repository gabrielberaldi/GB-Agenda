import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { OverlayService } from './overlay.service';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  //currentUser: User;
  authState$: Observable<firebase.User>;

  constructor(
    public afu: AngularFireAuth,
    public platform: Platform,
    private firestore: AngularFirestore,
    private overlayService: OverlayService
    ) { this.authState$ = this.afu.authState; }


  get isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map(user => user !== null ));
  }  

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afu.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  loginUser(value) {
    return this.afu.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(_ => {
      return new Promise<any>((resolve, reject) => {
        this.afu.signInWithEmailAndPassword(value.email, value.password)
          .then(
            res => resolve(res),
            err => reject(err)
        )
      })
    })
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.afu.currentUser) {
        this.afu.signOut()
          .then(() => {
            resolve();
          }).catch((error) => {
            reject();
          });
        }
    })
  }

  


}


