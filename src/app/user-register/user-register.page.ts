import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {
  
  ionicUserRegisterForm: FormGroup;
  verifyOtpForm: FormGroup;
  isSubmitted = false;
  isRegistered = false;
  OTP;
  userData: any;
  verifyOtp: any;
  // OTP: any =  {
  //   first: '',
  //   second: '',
  //   third: '',
  //   forth: '',
  //   // fifth: '',
  //   // sixth: ''
  // };
  constructor(
    public formBuilder: FormBuilder,
    private apiServiceService: ApiServiceService,
    private routes:Router,
    public loadingController: LoadingController,
    public alertController: AlertController
    ) { }

  ngOnInit() {
    this.ionicUserRegisterForm = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone_no: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
    this.verifyOtpForm = this.formBuilder.group({
      otp: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  get errorControl() {
    return this.ionicUserRegisterForm.controls;
  }
  
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicUserRegisterForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      // this.routes.navigate(['/terms-and-condtions']);
      var userData = this.ionicUserRegisterForm.value;
      console.log(userData);
      let registerData = { user_name: "", email: "", phone_no: ""};
      registerData.user_name = userData.user_name;
      registerData.phone_no = userData.phone_no;
      registerData.email = userData.email;
      this.registerUser(registerData);
      
    }
  }

  async registerUser(registerData) {

    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.apiServiceService.userRegister(registerData).subscribe((res:any) =>{
      console.log(res);
      if(res){
        if(res.status === "Success"){
          this.userData = res;
          this.isRegistered = true;
          loading.dismiss();
        }else if(res.status === "Duplicate_Phone_No"){
          console.log("Duplicate_Phone_No");
          this.isRegistered = false;
          loading.dismiss();
          this.showAlertController("Registration failed!", res.Message);
        }
      } else {
        loading.dismiss();
        this.showAlertController("Registration failed!", "Registration failed, please try again later.");
      }   
    })

  }

  otpController(event,next,prev,index){
    console.log(JSON.stringify(this.OTP));
    if(index == 4){
      console.log("submit")
    }
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
      // console.log(event.target.value);
     return 0;
    } 
  }

  async SubmitOtPForm() {
    //console.log(this.verifyOtpForm.value.otp, this.userData);
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
