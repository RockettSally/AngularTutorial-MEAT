import { MEAT_API } from './../app.backend';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { CartItem } from './../models/cart-item.model';
import { CartService } from './cart.service';
import { Injectable } from '@angular/core';
import { Order, OrderItem } from '../models/order.model';

@Injectable()

export class OrderService {

    constructor(private cartService: CartService, private http: Http){
        console.log('Hello OrderService');
    }

    itemsValue(): number {
        return this.cartService.total();
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

    clear(){
        this.cartService.clear();
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append('Content-Type','application/json');
        console.log(order);
        return this.http.post(`${MEAT_API}/orders`, 
                                JSON.stringify(order), 
                                new RequestOptions({headers: headers}))
            .map(response => response.json());
    }

}