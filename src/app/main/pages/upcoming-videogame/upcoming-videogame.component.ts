import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-upcoming-videogame',
  templateUrl: './upcoming-videogame.component.html',
  styleUrls: ['./upcoming-videogame.component.css']
})
export class UpcomingVideogameComponent implements OnInit {
  upcomingGames:Card[]=[];
  constructor(private gameService:GameService){}
 ngOnInit(): void {
   this.upcomingGames=this.gameService.getupcomingGames();
 }
}
