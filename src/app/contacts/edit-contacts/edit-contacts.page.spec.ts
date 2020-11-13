import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditContactsPage } from './edit-contacts.page';

describe('EditContactsPage', () => {
  let component: EditContactsPage;
  let fixture: ComponentFixture<EditContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
