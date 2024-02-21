import { Injectable } from '@angular/core';
import { Card } from '../main/models/card';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getAllGames():Card[]{
    return JSON.parse(localStorage.getItem('games') || '[]');
  }

  getPopularGames():Card[]{
    let Games:Card[]= JSON.parse(localStorage.getItem('games') || '[]');
    return Games.filter(g=>g.rating>4);
  }
  getMostDownloadedGames():Card[]{
    let Games:Card[]= JSON.parse(localStorage.getItem('games') || '[]');
    return Games.filter(g=>g.downloads>100);
  }
  getupcomingGames():Card[]{
    let Games:Card[]= JSON.parse(localStorage.getItem('games') || '[]');
    return Games.filter(g=>g.comingSoon);
  }
  createGames(){
    let games: Card[] = JSON.parse(localStorage.getItem('games') || '[]');

// Si no existe, crear un nuevo array con 8 elementos y almacenarlo en Local Storage
if (games.length === 0) {
    games = [
        {
            title: 'Videojuego 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque ad facilis eaque illum fugiat.',
            releaseDate: '02/08/2024',
            image: '../../../assets/images/game.png',
            rating: 4.5,
            downloads: 89,
            comingSoon: false
        },
        {
            title: 'Videojuego 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque ad facilis eaque illum fugiat.',
            releaseDate: '10/04/2023',
            image: '../../../assets/images/game.png',
            rating: 4.2,
            downloads: 150,
            comingSoon: false
        },
        {
            title: 'Videojuego 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque ad facilis eaque illum fugiat.',
            releaseDate: '07/12/2022',
            image: '../../../assets/images/game.png',
            rating: 4.7,
            downloads: 200,
            comingSoon: false
        },
        {
            title: 'Videojuego 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque ad facilis eaque illum fugiat.',
            releaseDate: '01/15/2020',
            image: '../../../assets/images/game.png',
            rating: 4.3,
            downloads: 120,
            comingSoon: false
        },
        {
            title: 'Videojuego 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque ad facilis eaque illum fugiat.',
            releaseDate: '02/08/2024',
            image: '../../../assets/images/game.png',
            rating: 4.6,
            downloads: 180,
            comingSoon: false
        },
        {
            title: 'Videojuego 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque ad facilis eaque illum fugiat.',
            releaseDate: '05/01/2023',
            image: '../../../assets/images/game.png',
            rating: 3.0,
            downloads: 95,
            comingSoon: false
        },
        {
            title: 'Videojuego 7',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque ad facilis eaque illum fugiat.',
            releaseDate: '02/30/2023',
            image: '../../../assets/images/game.png',
            rating: 3.7,
            downloads: 220,
            comingSoon: false
        },
        {
            title: 'Videojuego 8',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque ad facilis eaque illum fugiat.',
            releaseDate: '04/16/2024',
            image: '../../../assets/images/game.png',
            rating: 0,
            downloads: 0,
            comingSoon: true
        },
        {
            title: 'Videojuego 9',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque ad facilis eaque illum fugiat.',
            releaseDate: '08/20/2024',
            image: '../../../assets/images/game.png',
            rating: 0,
            downloads: 0,
            comingSoon: true
        },
        {
            title: 'Videojuego 10',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque ad facilis eaque illum fugiat.',
            releaseDate: '07/05/2024',
            image: '../../../assets/images/game.png',
            rating: 0,
            downloads: 0,
            comingSoon: true
        }
    ];

    // Almacenar el array en Local Storage
    localStorage.setItem('games', JSON.stringify(games));
}

  }
}
