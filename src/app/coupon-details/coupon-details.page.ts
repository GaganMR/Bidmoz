import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { AlertController, LoadingController } from '@ionic/angular';

declare var RazorpayCheckout:any;

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
    private routes:Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private route: ActivatedRoute) {
      this.coupon_id = this.route.snapshot.paramMap.get('coupon_id'); 
     }

  ngOnInit() {
  }

  async payWithRazorpay() {
    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    let generateCouponPurchaseOrderData = {
      coupon_id: this.coupon_id,
      user_id: this.userDetails.user_details[0].user_id
    }
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    await this.apiServiceService.generateCouponPurchaseOrder(generateCouponPurchaseOrderData).subscribe((result:any)=>{
      console.log(result);
      var options = {
        description: result.description,
        // order_id: result.order_id,
        currency: result.currency,
        key:result.key,
        amount:result.amount,
        name: 'Bidmoz',
        prefill:{
          email: this.userDetails.user_details[0].email,
          contact: this.userDetails.user_details[0].phone_no,
          name: this.userDetails.user_details[0].user_id
        },
        theme: {
          color: "#222428"
        }
      }
      var successCallback = function(success) {
        alert('razorpay_payment_id: ' + success.razorpay_payment_id + '\nrazorpay_order_id: ' + success.razorpay_order_id + '\nrazorpay_signature: ' + success.razorpay_signature)
        // var razorpay_payment_id = success.razorpay_payment_id
        // var razorpay_order_id = success.razorpay_order_id
        // var razorpay_signature = success.razorpay_signature
        loading.dismiss();
        //this.updateCouponPaymentDetails(result.payment_details_id, "Payment Completed", success.razorpay_payment_id, success.razorpay_order_id, success.razorpay_signature, "Payment Completed");
        // this.updateCouponPaymentDetails(result.payment_details_id, "Payment Completed", '11111111111111111', '281643789', 'akcjbadc832duoecdjcbn', "Payment Completed");
      }
      var cancelCallback = function(error) {
        alert(error.description + ' (Error '+error.code+')')
        loading.dismiss();
      }
      RazorpayCheckout.on('payment.success', successCallback)
      RazorpayCheckout.on('payment.cancel', cancelCallback)
      RazorpayCheckout.open(options, successCallback, cancelCallback)
      // console.log(this.RazorpayCheckout);
    })

  }

  async updateCouponPaymentDetails(payment_details_id, payment_status, razorpay_payment_id, razorpay_order_id, razorpay_signature, remarks) {

    let couponPaymentDetails = {
      user_id: this.userDetails.user_details[0].user_id,
      coupon_id: this.coupon_id,
      payment_details_id: payment_details_id,
      razorpay_payment_id: razorpay_payment_id,
      razorpay_order_id: razorpay_order_id,
      razorpay_signature: razorpay_signature,
      payment_status: payment_status
    }

    const loading = await this.loadingController.create({
      message: 'Updating payment details...'
    });
    await loading.present();
    await this.apiServiceService.updateCouponPaymentDetails(couponPaymentDetails).subscribe((res:any)=>{

      if(res){
        if(res.status === "Success"){
          localStorage.removeItem('userData');
          localStorage.setItem('userData', JSON.stringify(res));
          loading.dismiss();
          this.routes.navigate(['current-sessions']);
        } else {
          loading.dismiss();
          this.showAlertController("Coupon update!", "Failed to update user details, please try again later.");
        }
        
      } else {
        loading.dismiss();
        this.showAlertController("Coupon update!", "Failed to update user details, please try again later.");
      }

    })

  }

  showAlertController(sub_header, msg) {
    this.alertController.create({
      //header: 'Alert',
      subHeader: sub_header,
      message: msg,
      buttons: ['OK']
    }).then(res => {

      res.present();

    });
  }

}
