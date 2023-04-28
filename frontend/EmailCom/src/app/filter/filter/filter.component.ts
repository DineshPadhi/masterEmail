import { Component, OnInit } from '@angular/core';
import { FilterService } from './filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  templateData: any = [];

  term: any;

  constructor(private FilterService: FilterService) {}

  ngOnInit(): void {
    this.allData();
  }

  allData() {
    this.FilterService.getAllData().subscribe((res: any) => {
      console.log('table is', res.data);
      this.templateData = res.data;
      // console.log(this.templateData.templateName)
    });
  }

  filterSearch(data: any) {
    let filter = {};
    // console.log('data probably is',data);

    console.log('filter is in component.ts', data);
    this.FilterService.getFilterData(data).subscribe((resu: any) => {
      // console.log('resu is',resu.data[0]);
      // let update = resu.data[0];
    });
  }

  // searchData(){
  //   if()
  // }
}
