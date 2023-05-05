import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormServiceService } from 'src/app/home/form-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  templateData: any = [];

  constructor(
    private FilterService: FilterService,
    private router: Router,
    private active: ActivatedRoute
  ) {}
  filterData: any = [];
  searchValue: string;
  data: any[];
  filteredDatas: any[];
  searchText: any;
  id: any;
  myForm: FormGroup;
  itemsPerPage: number = 5;
  currentPage: number;
  totalItems: number = 0;
  page: number = 1;

  // constructor(private FilterService:FilterService, private http: HttpClient,private fb:FormBuilder) {}

  ngOnInit(): void {
    this.allData();
  }

  allData() {
    this.FilterService.getAllData().subscribe((res: any) => {
      this.templateData = res.data.result;
    });
  }

  filterSearch(data: any) {
    this.FilterService.getFilterData(data).subscribe((resu: any) => {
      this.templateData = resu.data;
      console.log('data in is', this.templateData);
      if (this.templateData) {
        this.currentPage = 1;
      }
      // if(!resu){
      //   this.router.navigate(['/allTemplateData'])
      // }
    });
  }

  // updateUser(id:any, data:any){
  //   this.FilterService.update(id, data).subscribe((result:any)=>{
  //     if(result){
  //       this.router.navigate(['/allTemplateData'])
  //     }
  //   })
  // }

  // preData:any

  // getById(id:any){

  //   // this.active.paramMap.subscribe((params:any)=>{
  //   //   this.id = params.get('id')
  //   //   if(this.id){
  //       this.FilterService.getDataById(id).subscribe((result:any)=>{
  //         console.log('result.......======',result.data[0].templateName);
  //         this.preData = result.data[0]
  //         console.log('predata=====',this.preData.templateName)
  //     //   })
  //     // }
  //   })

  // }
  onPageChange($event) {
    this.currentPage = $event;
  }
}
