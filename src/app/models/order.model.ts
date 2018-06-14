import { Address } from './address.model';

class Order {
    constructor(public address: string, 
        public paymentOption: string, 
        public orderItems: OrderItem[] = [])
        {}
}

class OrderItem {
    constructor(public quantity: number, public menuItemId: string){

    }
}

export {Order, OrderItem}