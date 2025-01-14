import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from '../services/cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let mockCartService: jasmine.SpyObj<CartService>;

  beforeEach(() => {
    mockCartService = jasmine.createSpyObj('CartService', ['getCart', 'clearCart', 'getSubtotal']);
    mockCartService.getCart.and.returnValue([
      { item: { name: 'Milk', price: 1.5, category: 'Dairy', image: '' }, quantity: 2 },
      { item: { name: 'Bread', price: 3.0, category: 'Bread', image: '' }, quantity: 1 },
    ]);
    mockCartService.getSubtotal.and.returnValue(6.0);

    TestBed.configureTestingModule({
      imports: [],
      declarations: [CartComponent],
      providers: [{ provide: CartService, useValue: mockCartService }],
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate subtotal correctly', () => {
    expect(component.subtotal).toBe(6.0);
  });

  it('should calculate tax correctly', () => {
    expect(component.tax).toBeCloseTo(0.78, 2);
  });

  it('should calculate total correctly', () => {
    expect(component.total).toBeCloseTo(6.78, 2);
  });

  it('should clear the cart', () => {
    component.clearCart();
    expect(mockCartService.clearCart).toHaveBeenCalled();
  });
});
