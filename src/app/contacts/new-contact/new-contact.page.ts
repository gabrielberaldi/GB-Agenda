import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.page.html',
  styleUrls: ['./new-contact.page.scss'],
})
export class NewContactPage implements OnInit {

  addForm: FormGroup;

  constructor(
    private crudService: CrudService,
    private router: Router,
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.crudService.getContacts();

    this.addForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      jobTitle: new FormControl(''),
      department: new FormControl(''),
      companyName: new FormControl(''),
      birthday: new FormControl(''),
      email: new FormControl('', Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')),
      mobileNumber: new FormControl(''),
      secondMobileNumber: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl(''),
      country: new FormControl(''),
    })
  }

 

  async createContact(){
    const loading = await this.loadingCtrl.create();

    const firstName = this.addForm.value.firstName;
    const middleName = this.addForm.value.middleName;
    const lastName = this.addForm.value.lastName;
    const jobTitle = this.addForm.value.jobTitle;
    const department = this.addForm.value.department;
    const companyName = this.addForm.value.companyName;
    const birthday = this.addForm.value.birthday;
    const email = this.addForm.value.email;
    const mobileNumber = this.addForm.value.mobileNumber;
    const secondMobileNumber = this.addForm.value.secondMobileNumber;
    //const address = this.addForm.value.address;
    const street = this.addForm.value.street;
    const city = this.addForm.value.city;
    const state = this.addForm.value.state;
    const zipCode = this.addForm.value.zipCode;
    const country = this.addForm.value.country;


    this.crudService.addContact(firstName,
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
      country,)
    .then(
      () => {
        loading.dismiss().then(() => {
          this.router.navigate(['/contacts-view']);
        });
      },
      error => {
        console.log(error);
      }
    );
    
    return await loading.present();
  }


 

  cancel(){
    this.router.navigate(['/contacts-view']);
  }

}
