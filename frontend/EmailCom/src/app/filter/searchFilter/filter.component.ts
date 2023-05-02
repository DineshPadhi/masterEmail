import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/home/form-service.service';




@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  templateData: any

  constructor(private FilterService: FilterService, private router: Router) {}
  filterData : any = []
  searchValue: string;
  data: any[];
  filteredDatas: any[];
  searchText:any; 
  myForm: FormGroup;


  // constructor(private FilterService:FilterService, private http: HttpClient,private fb:FormBuilder) {}


  ngOnInit(): void {
    this.allData();
  }

allData(){
  this.FilterService.getAllData().subscribe((res:any)=>{
    this.templateData = res.data;

  })
  
}


filterSearch(data:any){
  
    this.FilterService.getFilterData(data).subscribe((resu:any)=>{
      this.templateData = resu.data;
    
  })

}

// updateUser(id:any, data:any){
//   this.FilterService.update(id, data).subscribe((result:any)=>{
//     if(result){
//       this.router.navigate(['/allTemplateData'])
//     }
//   })
// }


}


