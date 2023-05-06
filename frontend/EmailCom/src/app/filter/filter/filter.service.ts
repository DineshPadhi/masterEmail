import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilterService implements OnInit{

  // FormData : any;

  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    
  }


  getAllData(){
    return this.httpClient.get('http://localhost:3000/get');
    // console.log("result is",this.FormData);
    
    // return this.FormData;
  }
}