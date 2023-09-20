import { Component, effect } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  showFiller = false;
  items = [
    {
      name: 'Set Function',
      selected: true,
      path: 'set'
    },
    {
      name: 'Update Function',
      selected: false,
      path: 'update'
    },
    {
      name: 'Cart',
      selected: false,
      path: 'cart'
    },
    {
      name: 'Mutate Function',
      selected: false,
      path: 'mutate'
    },
    {
      name: 'Effect Function',
      selected: false,
      path: 'effect'
    },
  ];

  isLoggedIn!:boolean;

  effect = effect(() => this.updateLoggedInVal(this.cart.isLoggedIn()) )
  constructor(private router: Router, private cart: CartService){}

  routeMe(obj:any){
    this.router.navigateByUrl(obj.path)
    console.log(obj);
  }

  updateLoggedInVal(value:boolean){
    this.isLoggedIn = value
  }

  loggedIn(){
    this.cart.isLoggedIn.set(true);
  }
  loggedOut(){
    this.cart.isLoggedIn.set(false);
  }
}
