import { Injectable } from '@angular/core';
import {MenuModel} from '../../models/menu.model';
import {Parser} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  viewMenu(id: string){
    const menu = this.menus.find(menu => menu.id === parseInt(id));
    return menu;
  }
  menus: MenuModel[] = [
    {
      id: 1,
      image: "https://mcdonalds.vn/uploads/2018/Phan-an-EVM-6-mieng-Ga-Vien-Vui-Ve-2.jpg",
      name: "Phần ăn EVM 6 miếng Gà Viên Vui Vẻ",
      price: "69,000 VNĐ",
      about: "1 CoCa 400ml + 6 miếng Gà Viên Vui Vẻ + 1 Khoai tây chiên(size vừa)"
    },
    {
      id: 2,
      image: "https://mcdonalds.vn/uploads/2018/food/evm/cheesedlx_bb_evm-min.png",
      name: "Phần ăn EVM Burger Bò Phô-mai Đặc biệt",
      price:"69,000 VNĐ",
      about:"1 Coca 400ml + 1 Bánh Burger Bò Phô-mai Đặc biệt + 1 Khoai tây chiên(size vừa)"
    },
    {
      id: 3,
      image: "https://mcdonalds.vn/uploads/2018/food/evm/fof_bb_evm-min.png",
      name: "Phần ăn EVM Burger phi-lê Cá",
      price: "69,000 VNĐ",
      about: "1 Coca 400ml + 1 Bánh Burger phi-lê Cá + 1 Khoai tây chiên(size vừa)",
    },
    {
      id: 4,
      image: "https://mcdonalds.vn/uploads/2018/food/evm/doublecheese_bb_evm-min.png",
      name: "Phần ăn EVM Burger 2 lớp Bò và Phô-mai",
      price: "79,000 VNĐ",
      about: "1 Coca 400ml + 1 Bánh Burger 2 lớp Bò và Phô-mai + 1 Khoai tây chiên(size vừa)",
    },
    {
      id: 5,
      image: "https://mcdonalds.vn/uploads/2018/food/evm/mcchickendlx_bb_evm-min.png",
      name: "Phần ăn EVM Burger Gà Phô-mai Đặc biệt",
      price: "89,000 VNĐ",
      about: "1 Coca 400ml + 1 Bánh Burger Gà Phô-mai Đặc biệt + 1 Khoai tây chiên(size vừa)",
    },
    {
      id: 6,
      image: "https://mcdonalds.vn/uploads/2018/food/evm/mcroyal_bb_evm-min.png",
      name: "Phần ăn EVM Burger Bò miếng lớn phô-mai",
      price: "95,000 VNĐ",
      about: "1 Coca 400ml + 1 Bánh Burger Bò miếng lớn phô-mai + 1 Khoai tây chiên(size vừa)",
    },
    {
      id: 7,
      image: "https://mcdonalds.vn/uploads/2018/food/evm/bigmac_bb_evm-min.png",
      name: "Phần ăn EVM Burger 2 lớp Bò Big Mac",
      price: "99,000 VNĐ",
      about: "1 Coca 400ml + 1 Bánh Burger 2 lớp Bò Big Mac + 1 Khoai tây chiên(size vừa)",
    },
    {
      id: 8,
      image: "https://mcdonalds.vn/uploads/2018/food/evm/mcroyaldlx_bb_evm-min.png",
      name: "Phần ăn EVM Burger Bò miếng lớn Phô-mai Đặc biệt",
      price: "105,000 VNĐ",
      about: "1 Coca 400ml + 1 Bánh Burger Bò miếng lớn Phô-mai Đặc biệt + 1 Khoai tây chiên(size vừa)",
    },
    {
      id: 9,
      image: "https://mcdonalds.vn/uploads/2018/food/evm/mcroyaldlx_bb_evm-min.png",
      name: "Phần ăn EVM Burger Phi-lê Gà Thượng Hạng Giòn Cay",
      price: "99,000 VNĐ",
      about: "1 Coca 400ml + 1 Bánh Burger Phi-lê Gà Thượng Hạng Giòn Cay + 1 Khoai tây chiên(size vừa)",
    },
  ]
}
