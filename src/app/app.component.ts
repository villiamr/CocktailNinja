import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from '../app/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  cocktail;
  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getCocktail().subscribe((data)=>{
      console.log(data);
      this.cocktail = data['cocktail'];
    });
  }
}
