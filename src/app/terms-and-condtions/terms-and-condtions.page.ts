import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-and-condtions',
  templateUrl: './terms-and-condtions.page.html',
  styleUrls: ['./terms-and-condtions.page.scss'],
})
export class TermsAndCondtionsPage implements OnInit {

  public isChecked: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  notify() {
    this.isChecked = !this.isChecked;
  } 

  acceptTermsAndConditions() {
    localStorage.setItem("terms&conditions","accepted");
    this.router.navigate(['current-sessions']);
  }

}
