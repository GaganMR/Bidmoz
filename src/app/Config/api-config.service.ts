import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor() { }
  api_url="https://bidmoz.thehereitis.com/bidmoz_app_apis";
  //api_url="http://192.168.43.87/bidmoz_dev";
}
