import { Component, OnInit } from '@angular/core';
import { shoppingCartService } from './shopping-cart.service';
import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-shopping-car',
  templateUrl: './shopping-car.component.html'
})
export class ShoppingCarComponent implements OnInit {

  constructor(private shoppingCartService: shoppingCartService) { }

  ngOnInit() {

  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  clear(){
    this.shoppingCartService.clear();
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item);
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item);
  }

}
