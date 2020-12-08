import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {
  userData: any;
  user_id: number;
  name: any;
  email: any;
  phone_no: any;

  constructor(
    private apiServiceService:ApiServiceService
  ) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this.user_id = 59;
    this.apiServiceService.getUserDetails(this.user_id).subscribe((res =>{
      console.log(res[0].user_name);
      if(res){
        this.name = res[0].user_name;
        this.email = res[0].email;
        this.phone_no = res[0].phone_no;
      }
     
    }))
  }

}
