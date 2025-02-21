import { Component } from '@angular/core';
import {DeliveryComponent} from '../../components/delivery/delivery.component';
import {ListenComponent} from '../../components/listen/listen.component';
import {ImgComponent} from '../../components/img/img.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DeliveryComponent,
    ListenComponent,
    ImgComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
