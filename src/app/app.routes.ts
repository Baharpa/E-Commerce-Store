import { Routes } from '@angular/router';
import { ShopCComponent } from './shop-c/shop-c.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: 'shop-c', component: ShopCComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
];
