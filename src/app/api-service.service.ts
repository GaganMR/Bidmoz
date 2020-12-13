import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from "@angular/common/http";
import { ApiConfigService } from 'src/app/Config/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  url: string;
  constructor(
    private http: HttpClient,
    private appConfig: ApiConfigService
  ) { 
    this.url = appConfig.api_url
  }

  userRegister(data){
    console.log("userRegister:", data);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }
    return this.http.post(this.url + '/user_registration.php?method=saveUserRegistrationDetails', data);
  }

  getUserDetails(userId) {
    console.log("getUserDetails:");
    return this.http.get(this.url + `/user_details.php?method=getUserDetails&user_id=`+userId);
  }

  getProductCategory() {
    console.log("getProductCategory:");
    return this.http.get(this.url + '/product_category.php?method=getProducts');
  }

  getCoupons(user_id) {
    console.log("getCoupons:");
    return this.http.get(this.url + `/coupons.php?method=getCoupons&user_id=`+user_id);
  }

  // getsessionCount() {
  //   console.log("getsessionCount:");
  //   return this.http.get(this.url + '/sessions.php?method=getCurrentSessionsCount');
  // }

  getSessions(){
    return this.http.get(this.url + '/sessions.php?method=getCurrentSessions');
  }

  getFeaturedProduct(){
    console.log("getFeaturedProduct:");
    return this.http.get(this.url + '/product_category.php?method=getFeaturedProducts');
  }

  getfeatureProductDetails(id){
    console.log(id);
    return this.http.get(this.url + `/product_category.php?method=getFeaturedProductDetails&product_id=`+id);
  }

  verifyOTP(data){
    console.log(data);
    return this.http.post(this.url + '/user_registration.php?method=verifyOTP', data);
  }

  userLogin(phoneNo){
    console.log(phoneNo);
    return this.http.get(this.url + `/user_registration.php?method=userLogin&phone_no=`+phoneNo);
  }

  requestFeatureProductDetails(data){
    console.log(data);
    return this.http.post(this.url + '/product_category.php?method=requestFeaturedProduct', data);
  }

  makeBidCount(data){
    console.log(data);
    return this.http.post(this.url + '/sessions.php?method=makeBidCount', data);
  }

  generateCouponPurchaseOrder(data) {
    console.log(data);
    return this.http.post(this.url + '/payments.php?method=generateCouponPurchaseOrder', data);
  }

  getUpcommingSessions(){
    return this.http.get(this.url + '/sessions.php?method=getUpcomingSessions');
  }

  getUpcommingSessionsDetails(session_id){
    return this.http.get(this.url + `/sessions.php?method=getSessionDetails&session_id=`+session_id);
  }

  updateCouponPaymentDetails(data) {
    console.log(data);
    return this.http.post(this.url + '/payments.php?method=updatePaymentDetails', data);
  }
  
}
