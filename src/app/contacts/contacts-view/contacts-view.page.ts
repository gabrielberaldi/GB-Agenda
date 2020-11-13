import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.page.html',
  styleUrls: ['./contacts-view.page.scss'],
})
export class ContactsViewPage implements OnInit {

  contacts: Array<any>;
  

  constructor(
    private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    
  ) { }


  async ngOnInit() {
    this.initializeItems();
  }


  async initializeItems(){
    this.crudService.getContacts().subscribe(data => {
      this.contacts = data.map(e => {
        return {
          id: e.payload.doc.id,
          firstName: e.payload.doc.data()['firstName'],
          middleName: e.payload.doc.data()['middleName'],
          lastName: e.payload.doc.data()['lastName']
        }
      })
    })
  }

  async filterList(event){
    var val = event.target.value;

    if(val  == "" ){
      return this.initializeItems();
    }

    if(val && val.trim() != ''){
      this.contacts = (this.contacts).filter((contact) => {
        return ((contact.firstName).toLowerCase().indexOf(val.toLowerCase()) >-1);
      })
    }
  }


  /*async filterList(event){
    const searchTerm = event.srcElement.value;
    
    if (!searchTerm) {
      return;
    }
    this.contacts = this.contacts.filter(currentContact => {
      if(currentContact.firstName && searchTerm ){
        if(currentContact.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }*/


}

