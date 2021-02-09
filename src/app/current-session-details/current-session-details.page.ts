import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-current-session-details',
  templateUrl: './current-session-details.page.html',
  styleUrls: ['./current-session-details.page.scss'],
})
export class CurrentSessionDetailsPage implements OnInit {
  session_id: string;
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
      this.upcommingSessionDetails = result;
      console.log(this.upcommingSessionDetails);

    })
  }

}
