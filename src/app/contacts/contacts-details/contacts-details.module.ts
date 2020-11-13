import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ContactsDetailsPageRoutingModule } from './contacts-details-routing.module';
import { ContactsDetailsPage } from './contacts-details.page';
//import { ContactsDetailsResolver } from './contacts-details.resolver';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ContactsDetailsPageRoutingModule,
    SharedModule,
    
  ],
  declarations: [ContactsDetailsPage],
  /*providers: [
    ContactsDetailsResolver
  ]*/
})
export class ContactsDetailsPageModule {}
