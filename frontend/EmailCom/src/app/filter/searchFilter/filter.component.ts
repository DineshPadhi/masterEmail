import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  templateData: any = [];

  constructor(
    private FilterService: FilterService
  ) {}

  filterData: any = [];
  searchValue: string;
  data: any[];
  filteredDatas: any[];
  searchText: any;
  id: any;
  myForm: FormGroup;
  itemsPerPage: number = 5;
  currentPage: number ;
  totalItems: number = 0;
  page: number = 1;

  ngOnInit(): void {
    this.allData();
  }

  allData() {
    this.FilterService.getAllData().subscribe((res: any) => {
      this.templateData = res.data;
    });
  }

  filterSearch(data: any) {
    this.FilterService.getFilterData(data).subscribe((resu: any) => {
      this.templateData = resu.data;
      // console.log('data in is', this.templateData);
      if (this.templateData) {
        this.currentPage = 1;
      }
    });
  }
 
  onPageChange($event) {
    this.currentPage = $event;
  }
}
