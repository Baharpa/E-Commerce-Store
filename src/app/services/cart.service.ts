import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: { item: Item; quantity: number }[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  addToCart(item: Item) {
    const cartItem = this.cart.find((i) => i.item.name === item.name);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({ item, quantity: 1 });
    }
    this.updateCartCount();
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.updateCartCount();
  }

  increment(item: Item) {
    const cartItem = this.cart.find((i) => i.item.name === item.name);
    if (cartItem) {
      cartItem.quantity++;
      this.updateCartCount();
    }
  }

  decrement(item: Item) {
    const cartItem = this.cart.find((i) => i.item.name === item.name);
    if (cartItem) {
      cartItem.quantity--;
      if (cartItem.quantity <= 0) {
        this.cart = this.cart.filter((i) => i.item.name !== item.name);
      }
      this.updateCartCount();
    }
  }

  getSubtotal(): number {
    return this.cart.reduce((sum, cartItem) => sum + cartItem.item.price * cartItem.quantity, 0);
  }

  private updateCartCount() {
    const totalCount = this.cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
    this.cartCountSubject.next(totalCount);
  }
}
