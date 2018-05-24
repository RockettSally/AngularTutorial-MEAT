import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Observable } from 'rxjs/Observable'
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../models/review.model';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Review>;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService){ }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id'];
    this.reviews = this.restaurantService.reviewsOfRestaurant(id);
  }

}
