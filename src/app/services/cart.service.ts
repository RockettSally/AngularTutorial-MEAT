import { CartItem } from '../models/cart-item.model';
import { MenuItem } from '../models/menu-item.model';

export class CartService {
    items: CartItem[] = [];

    clear(){
        this.items = [];
    }

    addItem(item: MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1;
        } else {
            this.items.push(new CartItem(item, 1));
        }
    }

    removeItem(item: CartItem){
        if(item.quantity > 1){
            item.quantity = item.quantity - 1;
        } else{
            this.items.splice(this.items.indexOf(item), 1);
        }
    }

    total(): number{
        return this.items
                .map(item => item.value())
                    .reduce((prev, value) => prev + value, 0);
    }

}