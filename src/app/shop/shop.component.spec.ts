import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopComponent } from './shop.component';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item.model';

describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;
  let mockCartService: jasmine.SpyObj<CartService>;

  beforeEach(() => {
    mockCartService = jasmine.createSpyObj('CartService', ['addToCart']);
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ShopComponent],
      providers: [{ provide: CartService, useValue: mockCartService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter items correctly', () => {
    component.selectedCategory = 'Dairy';
    const filteredItems = component.filterItems();
    expect(filteredItems.every((item) => item.category === 'Dairy')).toBeTrue();
  });

  it('should call addToCart when adding an item', () => {
    const item: Item = { name: 'Milk', price: 1.5, category: 'Dairy', image: '' };
    component.addToCart(item);
    expect(mockCartService.addToCart).toHaveBeenCalledWith(item);
  });
});
