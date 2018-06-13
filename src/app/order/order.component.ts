import { CartItem } from './../models/cart-item.model';
import { paymentOptions } from './../constants';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Address } from './../models/address.model';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  address: Address = {street: '', number: '', description: ''};
  paymentOptions: RadioOption[] = paymentOptions;
  selectedPaymentOption: any = "";

  constructor(private orderService: OrderService) { 

  }

  ngOnInit() {
    
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item);
  }

  removeItem(item: CartItem){
    this.orderService.removeItem(item);
  }

}
