import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, QueryFn} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { FirebaseAuthService } from './firebase-auth.service';



  
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  private snapshotChangesSubscription: any;

  constructor(
     private firestore: AngularFirestore,
     private afu: AngularFireAuth,
     private authService: FirebaseAuthService
    ) { }
  

  addContact( firstName: string,
    middleName: string,
    lastName: string,
    jobTitle: string,
    department: string,
    companyName: string,
    //office: string,
    birthday: string,
    email: string,
    mobileNumber: string,
    secondMobileNumber: string,
    //address: string,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    country: string){
      return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.firestore.collection('user').doc(currentUser.uid).collection('contacts').add({
        firstName,
        middleName,
        lastName,
        jobTitle,
        department,
        companyName,
        birthday,
        email,
        mobileNumber,
        secondMobileNumber,
        street,
        city,
        state,
        zipCode,
        country,
        })
        .then(
          res => resolve(res),
          err => reject(err)
      )
    })
  }
  


  getContacts(){
    let currentUser = firebase.auth().currentUser;
    return this.firestore.collection('user').doc(currentUser.uid).collection('contacts', ref => ref.orderBy('firstName','asc').orderBy('middleName','asc').orderBy('lastName','asc'))
    .snapshotChanges();
  }

  getContact(contactId: string):AngularFirestoreDocument<Contact>{
    let currentUser = firebase.auth().currentUser;
    return this.firestore.collection('user').doc(currentUser.uid).collection('contacts').doc(contactId)
  }

  updateContact(contactId,firstName: string,
    middleName: string,
    lastName: string,
    jobTitle: string,
    department: string,
    companyName: string,
    //office: string,
    birthday: string,
    email: string,
    mobileNumber: string,
    secondMobileNumber: string,
    //address: string,
    street: string,
    city: string,
    state: string,
    zipCode: string,
    country: string ){
    let currentUser = firebase.auth().currentUser;
    return this.firestore.collection('user').doc(currentUser.uid).collection('contacts').doc(contactId).update({
      firstName,
        middleName,
        lastName,
        jobTitle,
        department,
        companyName,
        birthday,
        email,
        mobileNumber,
        secondMobileNumber,
        street,
        city,
        state,
        zipCode,
        country,
    });
  }
      
  deleteContact(contactKey){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.firestore.collection('user').doc(currentUser.uid).collection('contacts').doc(contactKey).delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}



/*getContact(contactId){
    return new Promise<any>((resolve, reject) => {
      this.afu.user.subscribe(currentUSer => {
        if(currentUSer){
          this.snapshotChangesSubscription = this.firestore.doc<any>('user' + currentUSer.uid + '/contacts' + contactId).valueChanges()
          .subscribe(snapshots => {
            resolve(snapshots);
          }, err => {
            reject(err)
          })
        }
      })
    })
  }*/

  /*getContacts(){
    return new Promise<any>((resolve, reject) => {
      this.afu.user.subscribe(currentUser => {
        if(currentUser){
          this.snapshotChangesSubscription = this.firestore.collection('user').doc(currentUser.uid)
          .collection('contacts').snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      })
    })
  }*/

  



