import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RestaurantService } from '../services/restaurant.service';
import { Restaurant } from '../models/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  viewProviders: [Title]
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(title: Title, private route: ActivatedRoute, private restaurantService: RestaurantService) {
    title.setTitle(`Meat | Realizar Pedido`);
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.restaurantService.restaurantById(id)
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
