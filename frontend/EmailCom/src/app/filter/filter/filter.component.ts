import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
 })
export class FilterComponent implements OnInit{

  templateData : any = []
  term:any;


  constructor(private FilterService:FilterService) {}


  ngOnInit(): void {
    this.filerAllData()
  }

filerAllData(){
  this.FilterService.getAllData().subscribe((res:any)=>{
    console.log('table is',res.data)
    this.templateData = res.data;
    console.log('bab is',this.templateData.id)
  })
  
  
}

// searchData(){
//   if()
// }


}


