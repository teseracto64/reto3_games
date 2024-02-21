import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { CardGameComponent } from './components/card-game/card-game.component';
import { VideoGameComponent } from './pages/video-game/video-game.component';
import { PopularVideogameComponent } from './pages/popular-videogame/popular-videogame.component';
import { MostDownloadedVideogameComponent } from './pages/most-downloaded-videogame/most-downloaded-videogame.component';
import { UpcomingVideogameComponent } from './pages/upcoming-videogame/upcoming-videogame.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    HomeComponent,
    CardGameComponent,
    VideoGameComponent,
    PopularVideogameComponent,
    MostDownloadedVideogameComponent,
    UpcomingVideogameComponent,
    AppBarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
    
  ]
})
export class MainModule { }
