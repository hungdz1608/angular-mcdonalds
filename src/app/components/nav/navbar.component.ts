import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {CartService} from '../../services/cart/cart.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatButtonModule, MatBadgeModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(protected cartService: CartService) {
  }
}
