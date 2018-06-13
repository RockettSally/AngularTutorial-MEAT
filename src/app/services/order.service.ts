import { CartItem } from './../models/cart-item.model';
import { CartService } from './cart.service';
import { Injectable } from '@angular/core';

@Injectable()

export class OrderService {

    constructor(private cartService: CartService){
        console.log('Hello OrderService');
    }

    cartItems(): CartItem[]{
        return this.cartService.items;
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item);
    }

    removeItem(item: CartItem){
        this.cartService.removeItem(item);
    }
}