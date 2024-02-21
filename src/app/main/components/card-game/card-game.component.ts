import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent {
  @Input()card!:Card;
}
