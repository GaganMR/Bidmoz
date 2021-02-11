import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-featured-product-list',
  templateUrl: './featured-product-list.page.html',
  styleUrls: ['./featured-product-list.page.scss'],
})
export class FeaturedProductListPage implements OnInit {
  data: any;
  featured_product_id: any;
  product_id: any;
  productData: any;
  userDetails: any;
  featuredProduct:any;

  constructor(
    private socialSharing: SocialSharing,
    private apiServiceService:ApiServiceService,
    private route: ActivatedRoute,
    private routes: Router
  ) { }

  ngOnInit() {
    this.getfeatureProduct();
  }
  slideOpts = {
    initialSlide: 1,
  };
  sShare(){
    console.log("abc");
    var options = {
      message: 'Ionic Share', // not supported on some apps (Facebook, Instagram)
      url: 'https://ionicframework.com/docs/native/social-sharing',
    };
    this.socialSharing.shareWithOptions(options);
  }

  getfeatureProduct(){
    this.apiServiceService.getFeaturedProduct().subscribe((result:any) =>{
      console.log(result);
      this.featuredProduct = result;
    })
  }
  getFeatureProductDetails(){
    this.userDetails = JSON.parse(localStorage.getItem('userData'));
    console.log()
    let getFeaturedProductData ={
      featured_product_id:this.featured_product_id,
      product_id:this.product_id,
      user_id:this.userDetails.user_details[0].user_id
    }
    console.log(getFeaturedProductData);
    this.apiServiceService.requestFeatureProductDetails(getFeaturedProductData).subscribe((res:any)=>{
      console.log(res)
    })
  }

  couponDetails(item){
    console.log("jheh", item);
    this.routes.navigate(['feature-product-details']);
  }

}
