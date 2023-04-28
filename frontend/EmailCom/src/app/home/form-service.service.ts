import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
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
    return this.http.post('http://localhost:3000/', {
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
