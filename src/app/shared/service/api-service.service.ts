import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse,HttpParams  } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {map }from 'rxjs/operators';

// import {Products,Catagory,Categories} from '../model'
import {Category} from '../model/category';
import {Products} from '../model/products';
const httpOptions = {
  headers: new HttpHeaders({
    'method': 'GET',
      'Accept' : 'application/json',
      'Authorization' : 'Bearer ',
      'Access-Control-Allow-Origin' : '*',
      // 'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  zerozillaApiUrl1='https://fakestoreapi.com/products/categories'
  zerozillaApiUrl2='https://fakestoreapi.com/products/category/'
  zerozillaApiUrlId ='https://fakestoreapi.com/products/'
  // 'https://fakestoreapi.com/docs'

  constructor(  private httpClient: HttpClient,) { }
  getAllCategories():Observable<Category> {
    return this.httpClient.get<Category>(this.zerozillaApiUrl1 ,httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getAllCategory(categoryItem:string):Observable<Category> {
    return this.httpClient.get<Category>(`${this.zerozillaApiUrl2}${categoryItem} ` ,httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getAllCategoryById(categoryId:string):Observable<Category> {
    return this.httpClient.get<Category>(`${this.zerozillaApiUrlId}${categoryId} ` ,httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
