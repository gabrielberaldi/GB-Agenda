import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditContactsPage } from './edit-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: EditContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditContactsPageRoutingModule {}
