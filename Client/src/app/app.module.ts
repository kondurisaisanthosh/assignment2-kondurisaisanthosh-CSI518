import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantAPIService } from './restaurant-api.service';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { FormsModule } from '@angular/forms';
import { RestaurantprofileComponent } from './restaurantprofile/restaurantprofile.component';
import { RouterModule, Routes } from '@angular/router';

const approutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    RestaurantlistComponent,
    RestaurantprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [RestaurantAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
