import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  getName(inputValue){
   console.log(inputValue);
  }

  getCocktail(){
    return this.httpClient.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.getName}`);
  }
}
