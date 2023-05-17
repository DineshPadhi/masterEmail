import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { environment } from './../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService implements OnInit {
  url = environment.BS_BASE_URL;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitForm(data: any) {
    // let {
    //   templateName,
    //   templateCode,
    //   scenario,
    //   providers,
    //   user,
    //   tier,
    //   emailType,
    //   activity,
    //   status,
    //   targetAudience,
    //   lang,
    //   insideMail,
    // } = data;

      // data
      let formservice =  this.http.post(this.url, data);
      console.log('formservice...',data);
      return formservice;
      
      // templateName,
      // templateCode,
      // scenario,
      // providers,
      // user,
      // tier,
      // emailType,
      // activity,
      // status,
      // targetAudience,
      // lang,
      // insideMail,
  
    // console.log('formservicee---', formservice);
    // return formservice;
  }

  sendMail(data: any) {
    console.log('data......>>>>', data);

    let datasend = this.http.post(`${this.url}/sendMail`, data);
    console.log('datasend----', data.tname);
    console.log('datasenddatasend----', datasend);

    return datasend;
  }
}
