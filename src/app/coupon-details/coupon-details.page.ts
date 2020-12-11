import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.page.html',
  styleUrls: ['./coupon-details.page.scss'],
})
export class CouponDetailsPage implements OnInit {
  RazorpayCheckout:any;
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
      var options = {
        description: result.description,
        order_id: result.order_id,
        currency: result.currency,
        key:result.key,
        amount:result.amount,
        name: 'Bidnoz'
        }
        var successCallback = function(success) {
          alert('payment_id: ' + success.razorpay_payment_id)
          // var orderId = success.razorpay_order_id
          // var signature = success.razorpay_signature
        }
          var cancelCallback = function(error) {
          alert(error.description + ' (Error '+error.code+')')
        }
        // this.RazorpayCheckout.on('payment.success', successCallback)
        // this.RazorpayCheckout.on('payment.cancel', cancelCallback)
        this.RazorpayCheckout.open(options,successCallback, cancelCallback)
        // console.log(this.RazorpayCheckout);
    })

  }

}
