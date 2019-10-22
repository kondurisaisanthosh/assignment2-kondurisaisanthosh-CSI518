import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { RestaurantprofileComponent } from './restaurantprofile/restaurantprofile.component';



const routes: Routes = [
  {path:'', component:RestaurantlistComponent},
  {path:'restaurantprofile',component:RestaurantprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
