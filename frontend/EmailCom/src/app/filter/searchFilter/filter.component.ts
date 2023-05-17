import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormServiceService } from 'src/app/home/form-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent  {
  templateData: any = [];
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
  constructor(
    private FilterService: FilterService,
    private router: Router,
    private active: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.allData();
  
  }


  // ngOnInit(): void {
  //   this.allData();
  // }

  allData() {
    this.FilterService.getAllData().subscribe((res: any) => {
   
      this.templateData = res.data;
      console.log({data:this.templateData})
    });
  }

  filterSearch(data: any) {
    this.FilterService.getFilterData(data).subscribe((resu: any) => {
      this.templateData = resu.data;
      if (this.templateData.length == 0) {
        this.toastr.info('No Data Available');
      } else if (this.templateData){
        this.toastr.success(' Data Found Successfully');
      }

      if (this.templateData) {
        this.currentPage = 1;
      }
    });
  }
  onPageChange($event) {
    this.currentPage = $event;
  }

  // selectedValue: any = '';

  // onSelect(value: any) {
  //   this.selectedValue = value;
  // }
}
