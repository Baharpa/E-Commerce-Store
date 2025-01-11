import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart = [
    { name: 'Cinnamon Sticks', price: 0.5, quantity: 1 },
    { name: 'Saffron', price: 6, quantity: 2 },
  ];

  get totalPrice() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  increment(item: any) {
    item.quantity++;
  }

  decrement(item: any) {
    if (item.quantity > 1) item.quantity--;
  }

  clearCart() {
    this.cart = [];
  }
}
