import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common'; 
import { Item } from '../models/item.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  categories = ['All Categories', 'Bread', 'Dairy', 'Fruits', 'Vegetables', 'Spices'];
  items: Item[] = [
    { name: 'Spinach', price: 2.5, category: 'Vegetables', image: 'assets/images/spinach.jpg'},
    { name: 'Hamburger Bun', price: 3.0, category: 'Bread', image: 'assets/images/bread.jpg' },
    { name: 'Cinnamon', price: 2.5, category: 'Spices', image: 'assets/images/cinnamon.jpg'},
    { name: 'Saffron', price: 3.0, category: 'Spices', image: 'assets/images/saffron.jpg' },
    { name: 'Milk', price: 1.5, category: 'Dairy', image: 'assets/images/milk.jpg'},
    { name: 'Bananas', price: 0.5, category: 'Fruits', image: 'assets/images/banana.jpg' },
    { name: 'Brocolli', price: 0.5, category: 'Vegetables', image: 'assets/images/brocolli.jpg' },

  ];
  selectedCategory = 'All Categories';

  constructor(private cartService: CartService) {}

  filterItems() {
    if (this.selectedCategory === 'All Categories') return this.items;
    return this.items.filter((item) => item.category === this.selectedCategory);
  }

  addToCart(item: Item) {
    this.cartService.addToCart(item); // Add item to cart
  }
}
