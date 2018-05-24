import { Restaurant } from '../models/restaurant.model';
import { Injectable } from '@angular/core';
import { MEAT_API } from '../app.backend';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';
import { Review } from '../models/review.model';
import { MenuItem } from '../models/menu-item.model';

@Injectable()

export class RestaurantService {

    restaurants: Restaurant[];

    constructor(private http: Http){

    }

    findRestaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    reviewsOfRestaurant(id: string): Observable<Review>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }

    menuItemsOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError);
    }
}