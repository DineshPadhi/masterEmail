import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FilterService implements OnInit {
  // FormData : any;

  url = environment.BS_BASE_URL;

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {}

  getAllData() {
    return this.httpClient.get(`${this.url}/get`);
  }
  getDataById(id: any) {
    return this.httpClient.get(`${this.url}/getById/${id}`);
  }

  getFilterData(data: any) {
    // console.log('search', data);
    let result = this.httpClient.post(`${this.url}/search`, data);
    // console.log("data issssss ",data);
    return result;
  }

  update(id: any, data: any) {
    return this.httpClient.post(`${this.url}/update/${id}`, data);
  }
}
