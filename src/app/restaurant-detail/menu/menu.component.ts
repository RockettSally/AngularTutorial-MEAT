import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../../models/menu-item.model';
import { RestaurantService } from '../../services/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItems: Observable<MenuItem[]>;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) { 

  }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id'];
    this.menuItems = this.restaurantService.menuItemsOfRestaurant(id);
  }

  addMenuItem(item: MenuItem){
    console.log(item.name);
  }

}
