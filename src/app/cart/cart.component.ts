import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  get cart() {
    return this.cartService.getCart();
  }

  get subtotal() {
    return this.cartService.getSubtotal();
  }

  get tax() {
    return this.subtotal * 0.13; 
  }

  get total() {
    return this.subtotal + this.tax; 
  }

  clearCart() {
    this.cartService.clearCart();
  }

  get totalQuantity() {
    return this.cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
  }

}
