import { Component } from '@angular/core';
import { RestaurantAPIService } from './restaurant-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private restaurantsApi:RestaurantAPIService){

  }
  title = 'testproj';
 
}








