import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  loadChildren: ()=> import('./home/home.module').then(m=> m.HomeModule)
},
{
  path: 'filter',
  loadChildren: ()=> import('../app/filter/filter/filter.module').then(m=> m.FilterModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
