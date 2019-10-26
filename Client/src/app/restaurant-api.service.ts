import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class RestaurantAPIService {
  //apiURL='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.6905929,-73.8039541&radius=5000&type=restaurant&keyword=restaurant&key=AIzaSyDVQgKy2v09Yce_891pEigZOOpfgC6kra0';
  apiURL = '/api/data?place=';
  profile: any;
  constructor(private _http: HttpClient) { }
  getUsers(cityname) {

    return this._http.get<any>(this.apiURL + cityname);
  }

  setRestaurant(profile: any) {
    this.profile = profile;
    console.log(this.profile.photos[0].photo_reference);
    }
}
