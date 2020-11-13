import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { EditContactsPageRoutingModule } from './edit-contacts-routing.module';
import { EditContactsPage } from './edit-contacts.page';

import { SharedModule } from '../../shared/shared.module';
import { BrMaskerModule } from 'br-mask';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditContactsPageRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    BrMaskerModule
  ],
  declarations: [EditContactsPage]
})
export class EditContactsPageModule {}
