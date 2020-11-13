/*import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { CrudService } from '../../services/crud.service';

@Injectable()
export class ContactsDetailsResolver implements Resolve<any> {

  constructor(public crudService: CrudService) { }

  resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
      let contactId = route.paramMap.get('id');
      this.crudService.getContact(contactId)
      .then(data => {
        data.id = contactId;
        resolve(data);
      }, err => {
        reject(err);
      })
    })
  }
}*/