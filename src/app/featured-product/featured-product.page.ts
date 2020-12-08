import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { parse } from 'path';
import { AlertController, LoadingController,ToastController } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';
// import { Parse } from 'parse';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.page.html',
  styleUrls: ['./featured-product.page.scss'],
})
export class FeaturedProductPage implements OnInit {
  sessions: any;
  feturedProduct: any;
  userDetails: any;

  constructor(
    private apiServiceService:ApiServiceService,
    private router:Router,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public navCtrl: NavController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.getSession();
    this.getFeaturedProduct();
  }
  slideOpts = {
    initialSlide: 1,
  };
  
  getProduct(){
    this.apiServiceService.getProductCategory().subscribe((result:any)=>{
      // console.log(result);
    })
  }
  getSession(){
    this.apiServiceService.getSessions().subscribe((result:any)=>{
      this.sessions= result;
    
    })
  }

  getFeaturedProduct(){
    this.apiServiceService.getFeaturedProduct().subscribe((result:any) =>{
      console.log(result);
      this.feturedProduct = result;
    })
  }

  goToProductDetails(featured_product_id, product_id) {
    // console.log(id)
    this.router.navigate(['feature-product-details',featured_product_id,product_id])
  }
  
  bidCount(item){
    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    if(this.userDetails){
      if(this.userDetails.user_details[0].login_status === "ACTIVE"){
        if(this.userDetails.user_coupons){
          let user_coupons = this.userDetails.user_coupons;
          console.log(user_coupons)
          let matchCouponFound = false;
          let bidMatchData;
          for(let i = 0; i<user_coupons.length; i++){
              if(item.product_scale===user_coupons[i].coupon_applicable_scale){
                bidMatchData = {
                  session_id: item.session_id,
                  coupon_id: user_coupons[i].coupon_id,
                  user_id:this.userDetails.user_details[0].user_id
                }
                matchCouponFound = true;
                break;
              }else if(item.product_scale!==user_coupons[i].coupon_applicable_scale) {
                matchCouponFound = false;
              }
          }

          if(matchCouponFound) {
            this.apiServiceService.makeBidCount(bidMatchData).subscribe((result:any)=>{
              console.log(result);
              this.presentToast("Your bid is counted successfully.");
            })
          } else if(!matchCouponFound){
            this.showAlertController("Coupon not found","Currently there are no coupons available for this product in auction, you need to purchase a coupon that is applicable for this session !");
          }
   
        }else {
          this.showAlertController("No coupons found","Dear user, you do not have any coupons available in your account right now, you need to purchase a coupon in order to make your bid for this session.");
        }
      }
    }
     else {
      this.router.navigate(['sign-in-or-sin-up']);
    }
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  showAlertController(sub_header, msg) {
    this.alertController.create({
      //header: 'Alert',
      subHeader: sub_header,
      message: msg,
      backdropDismiss: false,
      buttons: [  {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Buy Coupons',
        handler: () => {
          this.router.navigate(['bid-plans']);
          console.log('Buy clicked');
        }
      }]
    }).then(res => {

      res.present();

    });
  }

}
