import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http:HttpClient) { }


  submitForm(data:any){
console.log({service:data});
    let {TemplateName, Template_Code, Scenario, Providers, User, Tier, EmailType, Activity, Status, TargetAudience, Subject, Body} = data;
    return this.http.post('http://localhost:3000/', {TemplateName, Template_Code, Scenario, Providers, User, Tier, EmailType, Activity, Status, TargetAudience, Subject, Body})
  }

}
