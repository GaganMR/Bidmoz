import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.page.html',
  styleUrls: ['./coupon-details.page.scss'],
})
export class CouponDetailsPage implements OnInit {

  userDetails: any;
  coupon_id: any;

  constructor(
    private apiServiceService:ApiServiceService,
    private route: ActivatedRoute) {
      this.coupon_id = this.route.snapshot.paramMap.get('coupon_id'); 
     }

  ngOnInit() {

  }

  payWithRazorpay() {

    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    let generateCouponPurchaseOrderData = {
      coupon_id: this.coupon_id,
      user_id: this.userDetails.user_details[0].user_id
    }

    this.apiServiceService.generateCouponPurchaseOrder(generateCouponPurchaseOrderData).subscribe((result:any)=>{
      console.log(result);
      
    })

  }

}
