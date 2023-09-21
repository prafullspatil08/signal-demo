import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  qty = signal<number>(0);
  onDecreaseQty(){
    this.qty.update(qty => {
       return qty-1});
  }

  onIncreaseQty(){
    let i = this.qty.update(qty =>{return qty+1});
  }
}
