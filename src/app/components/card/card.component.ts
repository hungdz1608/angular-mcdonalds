import {Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';
import {matMenuAnimations} from '@angular/material/menu';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() img!:string
  @Input() name!:string
  @Input() price!:string
  @Input() id!:number
  protected readonly matMenuAnimations = matMenuAnimations;
}

