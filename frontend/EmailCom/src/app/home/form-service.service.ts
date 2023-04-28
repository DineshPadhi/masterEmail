import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  url = environment.BS_BASE_URL;

  constructor(private http: HttpClient) {}

  submitForm(data: any) {
    console.log({ service: data });
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
      subject,
      body,
    } = data;

    return this.http.post(this.url, {
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
      subject,
      body,
    });
  }
}
