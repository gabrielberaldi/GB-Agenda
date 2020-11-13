import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/model/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { OverlayService } from 'src/app/services/overlay.service';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.page.html',
  styleUrls: ['./edit-contacts.page.scss'],
})
export class EditContactsPage implements OnInit {

  //contact: Observable<Contact>;
  editForm: FormGroup;
  contact: Contact = {};
  contactId: any;

  constructor(
    private crudService: CrudService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private overlayService: OverlayService
    ) { }

  ngOnInit() {
    this.contactId = this.route.snapshot.paramMap.get('id');
    //this.contact = this.crudService.getContact(contactId).valueChanges();
    this.crudService.getContact(this.contactId).valueChanges().subscribe(contact => {
      this.contact = contact;
    })

    this.editForm = this.fb.group({
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

  async updateContact(){
    //const loading = await this.loadingCtrl.create();

    const firstName = this.editForm.value.firstName;
    const middleName = this.editForm.value.middleName;
    const lastName = this.editForm.value.lastName;
    const jobTitle = this.editForm.value.jobTitle;
    const department = this.editForm.value.department;
    const companyName = this.editForm.value.companyName;
    const birthday = this.editForm.value.birthday;
    const email = this.editForm.value.email;
    const mobileNumber = this.editForm.value.mobileNumber;
    const secondMobileNumber = this.editForm.value.secondMobileNumber;
    //const address = this.editForm.value.address;
    const street = this.editForm.value.street;
    const city = this.editForm.value.city;
    const state = this.editForm.value.state;
    const zipCode = this.editForm.value.zipCode;
    const country = this.editForm.value.country;


    this.crudService.updateContact(this.contactId, 
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
      )
      .then(() => {
        this.overlayService.toast({
          message: "Dados atualizados com sucesso."
        });
        this.router.navigate(['/contacts-view'])
      })
    }


  cancel(){
    this.router.navigate(['/contacts-view']);
  }


}
