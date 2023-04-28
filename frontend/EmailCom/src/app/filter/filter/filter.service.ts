import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class FilterService implements OnInit{

  // FormData : any;

  url = environment.BS_BASE_URL

  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    
  }


  getAllData(){
    return this.httpClient.get(`${this.url}get`);
    // console.log("result is",this.FormData);
    
    // return this.FormData;
  }
}
