import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BidPlansPage } from './bid-plans.page';

describe('BidPlansPage', () => {
  let component: BidPlansPage;
  let fixture: ComponentFixture<BidPlansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidPlansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BidPlansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
