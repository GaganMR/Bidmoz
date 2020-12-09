import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {
  userData: any;
  user_id:any;
  name: any;
  email: any;
  phone_no: any;

  constructor(
    private apiServiceService:ApiServiceService,
    private route: ActivatedRoute
  ) { 
    this.user_id = this.route.snapshot.paramMap.get('user_id');
  }
 

  ngOnInit() {
    this.getUserData();
  }

  getUserData(){
    this.apiServiceService.getUserDetails(this.user_id).subscribe((res:any) =>{
      console.log(res);
      if(res){
        this.userData = res.user_details;
      }
     
    })
  }

}
