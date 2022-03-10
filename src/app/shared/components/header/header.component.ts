import { Component, OnInit } from '@angular/core';
import {CartServiceService} from '../../service/cart-service.service';
import {ApiServiceService} from '../../service/api-service.service';
import {Category} from '../../model/category'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartItem:any
  showSearchData:any;
  enableText:any = false;
  constructor(private productservice:ApiServiceService,public cartService:CartServiceService) { }
  ngOnInit(): void {

  }
  nameChange(arg:any) {
    this.enableText =true;
    console.log("modelchanged " + arg);
    this.productservice.getAllCategoryById(arg).subscribe((e)=>{
      this.showSearchData = e;
    })
  }

}
