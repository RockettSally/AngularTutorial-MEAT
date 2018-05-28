import { MenuItem } from './../../models/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  items(): CartItem[]{
    return this.cartService.items;
  }

  total(): number{
    return this.cartService.total();
  }

  clear(){
    this.cartService.clear();
  }

  removeItem(item: CartItem){
    this.cartService.removeItem(item);
  }

  addItem(item: MenuItem){
    this.cartService.addItem(item);
  }

}
