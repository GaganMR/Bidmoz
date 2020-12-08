import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CouponPurchasePage } from './coupon-purchase.page';

describe('CouponPurchasePage', () => {
  let component: CouponPurchasePage;
  let fixture: ComponentFixture<CouponPurchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponPurchasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CouponPurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
