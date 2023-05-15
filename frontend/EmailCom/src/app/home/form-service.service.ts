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
    let {
      templateName,
      templateCode,
      scenario,
      providers,
      user,
      tier,
      emailType,
      activity,
      status,
      targetAudience,
      lang,
      subject,
      body,
    } = data;

    let formservice =  this.http.post(this.url, {
      templateName,
      templateCode,
      scenario,
      providers,
      user,
      tier,
      emailType,
      activity,
      status,
      targetAudience,
      lang,
      subject,
      body,
    });
    console.log('formservicee---',formservice);
    return formservice
    
  }

  sendMail(data:any){
     let datasend =  this.http.post(`${this.url}/sendMail`,data  );
     console.log('datasend----',data);
     console.log('datasenddatasend----',datasend);
     
     return datasend;
  }
}


