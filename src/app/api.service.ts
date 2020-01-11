import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  inputValue;
  constructor(private httpClient: HttpClient) { }

  getCocktails(){
    return this.httpClient.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.inputValue}`);
  }
}
