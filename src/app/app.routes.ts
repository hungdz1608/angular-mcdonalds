import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MenuComponent} from './pages/menu/menu.component';
import {CartComponent} from './pages/cart/cart.component';
import {PromotionComponent} from './pages/promotion/promotion.component';
import {NewsComponent} from './pages/news/news.component';
import {MenuDetailsComponent} from './pages/menu-details/menu-details.component';
import {LocationComponent} from './pages/location/location.component';


export let routes: Routes;
routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'promotion',
    component: PromotionComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'menu-detail/:id',
    component: MenuDetailsComponent,
  },
  {
    path: 'location',
    component: LocationComponent,
  },
];
