import { Component } from '@angular/core';
import {DeliveryComponent} from '../../components/delivery/delivery.component';
import {ImgComponent} from '../../components/img/img.component';

@Component({
  selector: 'app-promotion',
  standalone: true,
  imports: [
    DeliveryComponent,
    ImgComponent
  ],
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.scss'
})
export class PromotionComponent {

}
