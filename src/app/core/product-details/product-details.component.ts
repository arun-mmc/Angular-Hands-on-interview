import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../../shared/service/api-service.service';
import {CartServiceService} from '../../shared/service/cart-service.service';
import {Category} from '../../shared/model/category';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  id:any;
  constructor(private backendService: ApiServiceService,private cartService: CartServiceService,private _Activatedroute:ActivatedRoute) { 
    _Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
  });
  }
  prod:any = [];
  ngOnInit(): void {
    console.log(this.id)
    this.backendService.getAllCategoryById(this.id).subscribe((ret: any)=>{  
      console.log("data",ret);  
      this.prod = ret;
      console.log("data",this.prod);  
     //  this.data = ret;  
      }) 
  }
  AddToCart(item:Category){
    console.log(item);
    this.cartService.mayBeLaterCart(item);
  }

}
