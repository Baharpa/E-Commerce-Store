
import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { Item } from '../models/item.model';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an item to the cart', () => {
    const item: Item = { name: 'Milk', price: 1.5, category: 'Dairy', image: '' };
    service.addToCart(item);
    expect(service.getCart().length).toBe(1);
    expect(service.getCart()[0].quantity).toBe(1);
  });

  it('should increment item quantity', () => {
    const item: Item = { name: 'Milk', price: 1.5, category: 'Dairy', image: '' };
    service.addToCart(item);
    service.increment(item);
    expect(service.getCart()[0].quantity).toBe(2);
  });

  it('should decrement item quantity and remove it if quantity reaches zero', () => {
    const item: Item = { name: 'Milk', price: 1.5, category: 'Dairy', image: '' };
    service.addToCart(item);
    service.decrement(item);
    expect(service.getCart().length).toBe(0);
  });

  it('should calculate the correct subtotal', () => {
    const item1: Item = { name: 'Milk', price: 1.5, category: 'Dairy', image: '' };
    const item2: Item = { name: 'Bread', price: 3.0, category: 'Bread', image: '' };
    service.addToCart(item1);
    service.addToCart(item2);
    service.increment(item1);
    expect(service.getSubtotal()).toBe(6.0);
  });
});
