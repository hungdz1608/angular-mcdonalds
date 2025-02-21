import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/nav/navbar.component';
import {ImgComponent} from './components/img/img.component';
import {CardComponent} from './components/card/card.component';
import {BelowComponent} from './components/below/below.component';
import {MenuModel} from './models/menu.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ImgComponent, CardComponent, BelowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web';
}

