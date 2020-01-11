import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  cocktails;
  checker = false;
  objectKeys = Object.keys;

  constructor(private apiService: ApiService) { }

  searchDrink(){
    this.checker = true;
    this.apiService.getCocktails().subscribe((data)=>{
      console.log(data);
      this.cocktails = data;
    });
  }

  ngOnInit() {
   
  }
}
