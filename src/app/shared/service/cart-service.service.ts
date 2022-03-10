import { Injectable } from '@angular/core';
import {  Subject,Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items:any = [];
   

  constructor(
  ) {
     this.items = [];
   }

  mayBeLaterCart(product:any) {
    if (this.items.includes(product) === false)
    this.items.push(product);
    // sessionStorage.setItem('cart',this.items);
  }
 
  getItems() {
     
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


   getTotal(items:any){
    let total = 0;
    for (var i = 0; i < items.length; i++) {
        if (items[i].price) {
            total = total + items[i].price
        }
    }
    return total;
}

}
