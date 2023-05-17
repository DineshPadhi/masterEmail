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

    return this.http.post(this.url, data);
    
  }

  sendMail(data: any) {
    console.log('data......>>>>', data);

    let datasend = this.http.post(`${this.url}/sendMail`, data);
    console.log('datasend----', data.tname);
    console.log('datasenddatasend----', datasend);

    return datasend;
  }
}
