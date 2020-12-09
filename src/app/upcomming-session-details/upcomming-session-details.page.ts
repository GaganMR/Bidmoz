import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-upcomming-session-details',
  templateUrl: './upcomming-session-details.page.html',
  styleUrls: ['./upcomming-session-details.page.scss'],
})
export class UpcommingSessionDetailsPage implements OnInit {
  session_id: string;
  product_id: string;
  upcommingSessionDetails: any;

  constructor(
    private apiServiceService:ApiServiceService,
    private route: ActivatedRoute
  ) { 
    this.session_id = this.route.snapshot.paramMap.get('session_id'); 
  }

  ngOnInit() {
    console.log(this.session_id)
    this.apiServiceService.getUpcommingSessionsDetails(this.session_id).subscribe((result:any)=>{
      console.log(result);
      this.upcommingSessionDetails= result;
    })
  }

  

}
