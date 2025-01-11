import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ShopCComponent } from './shop-c/shop-c.component'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,ShopCComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'E-Commerce';
}
