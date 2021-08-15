import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddtocartService {
  totalCartItem:number=0;
  baseUrl!: string;

  constructor(private http:HttpClient) { 
  this.baseUrl= "https://bookcart.azurewebsites.net/api/book";
}

productUrl = "https://bookcart.azurewebsites.net/api/shoppingcart/addtoCart/19408/2";

addProducts(userId:number, bookId: number){
  return this.http.get<any>(this.baseUrl.pipe(map((response:any)=>{
  return response;
  })))
}

}
