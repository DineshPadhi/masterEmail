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
      if (this.templateData) {
        this.currentPage = 1;
      }
    });
  }

  onPageChange($event) {
    this.currentPage = $event;
  }
}
