import { Component, OnInit } from '@angular/core';
import { FilterService } from '../filter.service';
<<<<<<< HEAD
import { FormGroup } from '@angular/forms';
=======
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormServiceService } from 'src/app/home/form-service.service';
import { ToastrService } from 'ngx-toastr';
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor(
<<<<<<< HEAD
    private FilterService: FilterService
  ) {}

=======
    private FilterService: FilterService,
    private router: Router,
    private active: ActivatedRoute,
    private toastr: ToastrService
  ) {}
  templateData: any = [];
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
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
<<<<<<< HEAD
      // console.log('data in is', this.templateData);
=======
      if (this.templateData.length == 0) {
        this.toastr.info('No Data Available');
      } else {
        this.toastr.success('Data Found Successfully');
      }
>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
      if (this.templateData) {
        this.currentPage = 1;
      }
    });
  }
<<<<<<< HEAD
 
=======

>>>>>>> 4d36ce3ae3e1b46d081cb6479f99acf98f7040cf
  onPageChange($event) {
    this.currentPage = $event;
  }
}
