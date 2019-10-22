import { Component, OnInit } from '@angular/core';
import { RestaurantAPIService } from '../restaurant-api.service';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {
  currentRestaurant: any;

  ngOnInit() {
  }
  constructor(private restaurantsApi:RestaurantAPIService){

  }
  title = 'testproj';
  city:string;
  restarants:any;
  showprofile:boolean;

searchRestaurants(){
this.restaurantsApi.getUsers(this.city).subscribe((data)=>{
this.restarants = data['results'];
console.log('json ' + data);
console.log('json ' + data.results);
},(error)=>{
  console.log(error);
});
}

showRestaurantProfile(restaurant){
this.showprofile=true;
this.currentRestaurant=restaurant;
this.restaurantsApi.setRestaurant(restaurant);
}

backtoSearchResults(){
  this.showprofile=false;
}
}
