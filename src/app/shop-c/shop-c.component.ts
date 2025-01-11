import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-c',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './shop-c.component.html',
  styleUrls: ['./shop-c.component.css'],
})
export class ShopCComponent {
  categories = ['All Categories', 'Bread', 'Dairy', 'Fruits', 'Seasonings and Spices', 'Vegetables'];
  products = [
    { name: 'Spinach', price: 2.5, category: 'Vegetables', image: 'assets/images/spinach.jpg' },
    { name: 'Freshly Baked Bread', price: 3, category: 'Bread', image: 'assets/images/bread.jpg' },
    { name: 'Lavash Bread', price: 1.25, category: 'Bread', image: 'assets/images/lavash.jpg' },
    { name: 'Cinnamon Sticks', price: 0.5, category: 'Seasonings and Spices', image: 'assets/images/cinammon.jpg' },
    { name: 'Saffron', price: 6, category: 'Seasonings and Spices', image: 'assets/images/zaffron.jpg' },
  ];
  selectedCategory = 'All Categories';

  filterProducts() {
    if (this.selectedCategory === 'All Categories') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  addToCart(product: any) {
    console.log(`Added ${product.name} to cart.`);
}

}
