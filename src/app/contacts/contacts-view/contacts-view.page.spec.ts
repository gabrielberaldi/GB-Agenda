import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactsViewPage } from './contacts-view.page';

describe('ContactsViewPage', () => {
  let component: ContactsViewPage;
  let fixture: ComponentFixture<ContactsViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
