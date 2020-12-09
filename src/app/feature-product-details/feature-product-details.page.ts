import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-feature-product-details',
  templateUrl: './feature-product-details.page.html',
  styleUrls: ['./feature-product-details.page.scss'],
})
export class FeatureProductDetailsPage implements OnInit {
  data: any;
  featured_product_id: any;
  product_id: any;
  productData: any;
  userDetails: any;
  featuredProduct:any;

  constructor(
    private socialSharing: SocialSharing,
    private apiServiceService:ApiServiceService,
    private route: ActivatedRoute
    ) {
     }
    

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

}
