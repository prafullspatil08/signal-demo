import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  isLoggedIn = signal<boolean>(false);
  constructor() { }
}
