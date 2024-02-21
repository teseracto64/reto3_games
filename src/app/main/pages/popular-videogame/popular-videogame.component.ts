import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-popular-videogame',
  templateUrl: './popular-videogame.component.html',
  styleUrls: ['./popular-videogame.component.css']
})
export class PopularVideogameComponent implements OnInit {
  popularGames:Card[]=[];
  constructor(private gameService:GameService){}
 ngOnInit(): void {
   this.popularGames=this.gameService.getPopularGames();
 }
}
