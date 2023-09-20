import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent {
  qty = signal<number>(0);

  onDecreaseQty(){
    this.qty.update(qty => {
       return qty-1});
  }

  onIncreaseQty(){
    
    let i = this.qty.update(qty =>{return qty+1});
    console.log('i: ', i)
  }
}
