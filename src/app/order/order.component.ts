import { CartItem } from './../models/cart-item.model';
import { paymentOptions } from './../constants';
import { RadioOption } from './../shared/radio/radio-option.model';
import { Address } from './../models/address.model';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order, OrderItem } from '../models/order.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = paymentOptions;
  selectedPaymentOption: any = "";
  delivery: number = 8;

  constructor(private orderService: OrderService) { 

  }

  ngOnInit() {
    
  }

  itemsValue(): number{
    return this.orderService.itemsValue();
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

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
        .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    order.paymentOption = this.selectedPaymentOption;
    this.orderService.checkOrder(order).subscribe((orderId: string) =>{
      console.log(`Compra concluida: ${orderId}`);
    });
    this.orderService.clear();   
  }
}
