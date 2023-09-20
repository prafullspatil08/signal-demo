import { Component, effect } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  effect = effect(()=> this.getSignalValue(this.cart.isLoggedIn()))
  isLoggedIn!:boolean;
  constructor(private cart: CartService) {}

  getSignalValue(value:boolean){
    this.isLoggedIn = value;
  }
}
