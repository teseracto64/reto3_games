import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allGames:Card[]=[];
  constructor(private gameService:GameService){}
 ngOnInit(): void {
   this.allGames=this.gameService.getAllGames();
 }
}
