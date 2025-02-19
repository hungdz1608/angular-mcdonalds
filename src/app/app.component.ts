import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/nav/navbar.component';
import {ImgComponent} from './components/img/img.component';
import {CardComponent} from './components/card/card.component';
import {BelowComponent} from './components/below/below.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ImgComponent, CardComponent, BelowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web';
  menus: { image: string; name: string; price: string}[] = [
    {
      image: "https://mcdonalds.vn/uploads/2018/Phan-an-EVM-6-mieng-Ga-Vien-Vui-Ve-2.jpg",
      name: "Phần ăn EVM 6 miếng Gà Viên Vui Vẻ",
      price: "69,000 VNĐ"
    },
    {
      image: "https://mcdonalds.vn/uploads/2018/food/evm/cheesedlx_bb_evm-min.png",
      name: "Phần ăn EVM Burger Bò Phô-mai Đặc biệt",
      price: "69,000 VNĐ"
    },
    {
      image: "https://mcdonalds.vn/uploads/2018/food/evm/fof_bb_evm-min.png",
      name: "Phần ăn EVM Burger phi-lê Cá",
      price: "69,000 VNĐ"
    },
    {
      image: "https://mcdonalds.vn/uploads/2018/food/evm/doublecheese_bb_evm-min.png",
      name: "Phần ăn EVM Burger 2 lớp Bò và Phô-mai",
      price: "79,000 VNĐ"
    },
    {
      image: "https://mcdonalds.vn/uploads/2018/food/evm/mcchickendlx_bb_evm-min.png",
      name: "Phần ăn EVM Burger Gà Phô-mai Đặc biệt",
      price: "89,000 VNĐ"
    },
    {
      image: "https://mcdonalds.vn/uploads/2018/food/evm/mcroyal_bb_evm-min.png",
      name: "Phần ăn EVM Burger Bò miếng lớn phô-mai",
      price: "95,000 VNĐ"
    },
    {
      image: "https://mcdonalds.vn/uploads/2018/food/evm/bigmac_bb_evm-min.png",
      name: "Phần ăn EVM Burger 2 lớp Bò Big Mac",
      price: "99,000 VNĐ"
    },
    {
      image: "https://mcdonalds.vn/uploads/2018/food/evm/mcroyaldlx_bb_evm-min.png",
      name: "Phần ăn EVM Burger Bò miếng lớn Phô-mai Đặc biệt",
      price: "105,000 VNĐ"
    },
    {
      image: "https://mcdonalds.vn/uploads/2018/food/evm/mcroyaldlx_bb_evm-min.png",
      name: "Phần ăn EVM Burger Phi-lê Gà Thượng Hạng Giòn Cay",
      price: "99,000 VNĐ"
    },
  ]
}

