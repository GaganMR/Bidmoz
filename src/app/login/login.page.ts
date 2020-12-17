import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginData: any = { user_name: "", email: "", phone_no: ""};
  ionicUserLoginForm: FormGroup;
  verifyOtpForm:FormGroup;
  isSubmitted = false;
  isLoggedIn = false;
  userData: any;

  constructor(
    public formBuilder: FormBuilder,
    private apiServiceService: ApiServiceService,
    private routes:Router,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }
  
  ngOnInit() {
    this.ionicUserLoginForm = this.formBuilder.group({
      phone_no: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
    this.verifyOtpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  get errorControl() {
    return this.ionicUserLoginForm.controls;
  }

  loginForm() {
    this.isSubmitted = true;
    if (!this.ionicUserLoginForm.valid) {
      console.log('Please provide the Mobile Number!')
      return false;
    } else {
      this.loginUser();
    }
  }

  async loginUser() {

    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.apiServiceService.userLogin(this.ionicUserLoginForm.value.phone_no).subscribe((res:any)=>{
      console.log(res);
      if(res){
        if(res.status === "Success"){
          this.userData = res;
          this.isLoggedIn = true;
          loading.dismiss();
        } else if(res.status === "Failed"){
          this.isLoggedIn = false;
          loading.dismiss();
          this.showAlertController("Login failed!", res.Message);
        }
      }
     
    })

  }

  otpController(event,next,prev){
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
      return 0;
    } 
  }

  async SubmitOtPForm() {
    //console.log(this.verifyOtpForm.value.otp);
    let user = {
      user_id: this.userData.user_id,
      phone_no: this.userData.phone_no,
    }
    if(this.userData.otp == this.verifyOtpForm.value.otp){
      
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      await loading.present();
      await this.apiServiceService.verifyOTP(user).subscribe((res:any)=>{
        console.log(res);
        if(res){
          if(res.status === "Success"){
            localStorage.setItem('userData', JSON.stringify(res));
            loading.dismiss();
            this.routes.navigate(['current-sessions']);
          } else {
            this.showAlertController("OTP!", "OTP varification failed!");
            loading.dismiss();
          }
        }else {
          loading.dismiss();
          this.showAlertController("OTP!", "OTP varification failed, please try again later.");
        }  
      })

    }
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
