import { Component, OnInit } from '@angular/core';
import { RestaurantAPIService } from '../restaurant-api.service';

@Component({
  selector: 'app-restaurantprofile',
  templateUrl: './restaurantprofile.component.html',
  styleUrls: ['./restaurantprofile.component.css']
})
export class RestaurantprofileComponent implements OnInit {

  currentRestaurant: any;
  constructor(private _restProf:RestaurantAPIService) { }

  ngOnInit() {
    this.currentRestaurant = this._restProf.profile;
    console.log(this.currentRestaurant.name);
  }

}
