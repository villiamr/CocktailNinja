import { Component } from '@angular/core';
import { ApiService } from '../app/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  getInput(inputValue){
    this.apiService.inputValue = inputValue;
   }
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {}
}
