import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpcommingSessionDetailsPage } from './upcomming-session-details.page';

describe('UpcommingSessionDetailsPage', () => {
  let component: UpcommingSessionDetailsPage;
  let fixture: ComponentFixture<UpcommingSessionDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcommingSessionDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpcommingSessionDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
