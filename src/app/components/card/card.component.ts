import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() img!:string
  @Input() name!:string
  @Input() price!:string
}
