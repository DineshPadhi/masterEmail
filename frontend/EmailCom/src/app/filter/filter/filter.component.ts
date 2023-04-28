import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  filter : any = []

  constructor(private FilterService:FilterService) {}


  ngOnInit(): void {
    this.filerdata()
  }

filerdata(){
  this.FilterService.getAllData().subscribe((res:any)=>{
    console.log('table is',res.data)
    this.filter = res.data;
    console.log('bab is',this.filter.id)
    
  
  })
}


}
