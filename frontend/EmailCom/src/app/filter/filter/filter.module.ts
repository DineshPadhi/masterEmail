import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { FilterService } from './filter.service';


@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    FilterRoutingModule
  ],
  providers: [
    FilterService
  ]
})
export class FilterModule { }
