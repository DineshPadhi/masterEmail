import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http:HttpClient) { }


  submitForm(data:any){
    return this.http.post('http://localhost:3000', data)
  }

}
