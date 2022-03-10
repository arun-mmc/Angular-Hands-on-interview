import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {path:'',component:ProductDetailsComponent},
  //  {path:'detials/:id',component:ProductDetailsComponent},
];


@NgModule({
  declarations: [
    ProductDetailsComponent,
    // ProductDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
