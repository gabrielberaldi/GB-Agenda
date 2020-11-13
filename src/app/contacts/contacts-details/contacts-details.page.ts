import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
//import { Observable } from 'rxjs';
import { Contact } from '../../model/contact';
import { AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx'

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.page.html',
  styleUrls: ['./contacts-details.page.scss'],
})
export class ContactsDetailsPage implements OnInit {

  contactId: string = this.route.snapshot.paramMap.get('id');
  contact: Contact = {};
  //public contact: Observable<Contact>;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private crudService: CrudService,
    private alertController: AlertController,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
    const contactId: string = this.route.snapshot.paramMap.get('id');
    this.crudService.getContact(contactId).valueChanges().subscribe(contact => {
      this.contact = contact;
    })
  }

  async deleteContact(){
    const alert = await this.alertController.create({
      message:'Deseja realmente excluir o contato ? Esta ação não poderá ser revertida !',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: blah =>{
            console.log('Confirm cancel: blah');
          },
        },
        {
          text: 'Sim',
          handler: () =>{
            this.crudService.deleteContact(this.contactId).then(() => {
              this.router.navigate(['/contacts-view']);
            })
          }
        }
      ]
    });
    await alert.present();
  }

  callContact(number: string){
    this.callNumber.callNumber(number, true)
      .then(() => console.log('Ligação iniciada'))
      .catch(() => console.log('Falha ao ligar.'))
  }
  
}
