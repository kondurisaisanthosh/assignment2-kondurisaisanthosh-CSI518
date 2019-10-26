import { Component, OnInit } from '@angular/core';
import { RestaurantAPIService } from '../restaurant-api.service';

@Component({
  selector: 'app-restaurantprofile',
  templateUrl: './restaurantprofile.component.html',
  styleUrls: ['./restaurantprofile.component.css']
})
export class RestaurantprofileComponent implements OnInit {

  currentRestaurant: any;
  photo:string;
  photoAPI="https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDVQgKy2v09Yce_891pEigZOOpfgC6kra0&maxheight=100&photo_reference=";
  constructor(private _restProf:RestaurantAPIService) { }

  ngOnInit() {
    this.currentRestaurant = this._restProf.profile;
    this.photo=this.currentRestaurant.photos[0].photo_reference;
    
  }

}
