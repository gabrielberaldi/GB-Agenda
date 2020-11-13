import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsViewPage } from './contacts-view.page';

const routes: Routes = [
  {
    path: '',
    component: ContactsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsViewPageRoutingModule {}
