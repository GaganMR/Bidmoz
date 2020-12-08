import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInOrSinUpPage } from './sign-in-or-sin-up.page';

describe('SignInOrSinUpPage', () => {
  let component: SignInOrSinUpPage;
  let fixture: ComponentFixture<SignInOrSinUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInOrSinUpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInOrSinUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
