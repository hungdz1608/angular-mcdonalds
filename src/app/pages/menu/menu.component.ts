import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {MenuService} from '../../services/menu/menu.service';
import {MenuModel} from '../../models/menu.model';
import {ImgComponent} from '../../components/img/img.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CardComponent, ImgComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  menus!: MenuModel[];
  constructor(private menuService: MenuService) {
  }
  ngOnInit() {
    this.menus = this.menuService.menus;
  }
}

