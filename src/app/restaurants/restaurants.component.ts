import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  viewProviders: [Title]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(title: Title, private restaurantService: RestaurantService){
    title.setTitle('Meat | Restaurantes');
  }

  ngOnInit() {
    this.restaurantService.findRestaurants().subscribe(
      restaurants => this.restaurants = restaurants
    );
  }

}
