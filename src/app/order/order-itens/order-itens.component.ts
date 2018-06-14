import { CartItem } from './../../models/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increaseQty: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decreaseQty: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {

  }

  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item);
  }

  emitRemoveItem(item: CartItem){
    this.removeItem.emit(item);
  }


}
