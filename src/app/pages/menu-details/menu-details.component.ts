import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MenuModel} from '../../models/menu.model';
import {MenuService} from '../../services/menu/menu.service';
import {CartService} from '../../services/cart/cart.service';

class CartServiceService {
}

@Component({
  selector: 'app-menu-details',
  standalone: true,
  imports: [],
  templateUrl: './menu-details.component.html',
  styleUrl: './menu-details.component.scss'
})
export class MenuDetailsComponent {
  currentId!: MenuModel | undefined;
  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService,protected cartService: CartService) {
    const { id } = this.activatedRoute.snapshot.params;
    this.currentId = this.menuService.viewMenu(id);
  }
}

