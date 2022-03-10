import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../service/api-service.service';
import {Category} from '../../model/category'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private backendService: ApiServiceService) { }
  dataCategory:any;
  dataCategories:any;
  ngOnInit(): void {
    this.backendService.getAllCategories().subscribe((ret: any)=>{  
      this.dataCategories = ret;
      console.log("data",this.dataCategories);  
     //  this.data = ret;  
      }) 
    this.backendService.getAllCategory('jewelery').subscribe((ret: Category)=>{  
      this.dataCategory = ret;
      console.log("data",this.dataCategory);  
      //  this.data = ret;  
      }) 
  }
  getCategory(categoryItem:string){
    this.backendService.getAllCategory(categoryItem).subscribe((ret: any)=>{  
      this.dataCategory = ret;
      console.log("data",this.dataCategory);  
      //  this.data = ret;  
      }) 
  }
}
