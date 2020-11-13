import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NewContactPageRoutingModule } from './new-contact-routing.module';
import { NewContactPage } from './new-contact.page';
import { SharedModule } from '../../shared/shared.module';
import { BrMaskerModule } from 'br-mask';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewContactPageRoutingModule,
    SharedModule,
    BrMaskerModule
    
  ],
  declarations: [NewContactPage]
})
export class NewContactPageModule {}
