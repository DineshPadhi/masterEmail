import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
 })
export class FilterComponent implements OnInit{

  templateData : any = []
  filterData : any = []
  searchValue: string;
  data: any[];
  filteredDatas: any[];
  searchText:any; 
  myForm: FormGroup;


  constructor(private FilterService:FilterService, private http: HttpClient,private fb:FormBuilder) {}


  ngOnInit(): void {
    this.allData()
  }

allData(){
  this.FilterService.getAllData().subscribe((res:any)=>{
    this.templateData = res.data;

  })
  
}


Filter:any= {};
update:any;

filterSearch(data:any){
  
    this.FilterService.getFilterData(data).subscribe((resu:any)=>{
      this.templateData = resu.data;
    
  })

}
// ngForm:any;

reset(){
// this.ngForm.reset()
}

}

