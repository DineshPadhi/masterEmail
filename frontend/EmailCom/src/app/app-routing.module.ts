import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'createEmailTemplate',
  pathMatch: 'full'
},
{
  path: 'createEmailTemplate',
  loadChildren: ()=> import('./home/home.module').then(m=> m.HomeModule)
},
{
  path: 'allTemplateData',
  loadChildren: ()=> import('../app/filter/filter.module').then(m=> m.FilterModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
