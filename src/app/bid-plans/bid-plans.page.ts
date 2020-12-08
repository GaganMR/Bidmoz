import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-bid-plans',
  templateUrl: './bid-plans.page.html',
  styleUrls: ['./bid-plans.page.scss'],
})
export class BidPlansPage implements OnInit {

  allCoupons:any;
  userDetails: any;
  activeCoupons: any;
  userCoupons: any;

  constructor(
    private apiServiceService: ApiServiceService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getCoupon();
  }
  
getCoupon(){
  this.userDetails = JSON.parse(localStorage.getItem('userData'));
  this.apiServiceService.getCoupons(this.userDetails.user_details[0].user_id).subscribe((result:any) =>{
    console.log(result);
    this.activeCoupons = result.active_coupons_details;
    this.userCoupons = result.user_coupons_details;
    // console.log(this.allCoupons);
  });
}

coupnDetails(item){
  this.router.navigate(['coupon-details', item.coupon_id]); 
}
 

}
