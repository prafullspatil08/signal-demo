import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.scss'],
})
export class EffectComponent {
  product = signal({
    name: 'Laptop',
    category: 'Electronics',
    price: 2000,
    rating: 4.5,
  });

  changeProductName() {
    this.product.mutate((product) => {
      if (product.name === 'Mobile') {
        product.name = 'Laptop'
        return;
      }
      product.name = 'Mobile';
    });
  }

  sideEffect = effect(() => this.saveProductDatatoAPI(this.product()));

  saveProductDatatoAPI(product: any) {
    console.log('Call Api with product Data: ', product);
  }
}
