import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ContactsViewPageRoutingModule } from './contacts-view-routing.module';
import { ContactsViewPage } from './contacts-view.page';
//mport { ContactsResolver } from './contacts.resolver';

import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsViewPageRoutingModule,
    SharedModule
    
  ],
  declarations: [ContactsViewPage],
  /*providers: [
    ContactsResolver
  ]*/

})
export class ContactsViewPageModule {}
