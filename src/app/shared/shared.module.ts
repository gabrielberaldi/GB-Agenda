import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LogoutButtonComponent } from './logout-button/logout-button.component'

@NgModule({
  declarations: [LogoutButtonComponent],
  imports: [IonicModule],
  exports: [
    CommonModule,
    IonicModule,
    LogoutButtonComponent
  ]
})
export class SharedModule {}