import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-most-downloaded-videogame',
  templateUrl: './most-downloaded-videogame.component.html',
  styleUrls: ['./most-downloaded-videogame.component.css']
})
export class MostDownloadedVideogameComponent implements OnInit {
  downloadedGames:Card[]=[];
  constructor(private gameService:GameService){}
 ngOnInit(): void {
   this.downloadedGames=this.gameService.getMostDownloadedGames();
 }
}
