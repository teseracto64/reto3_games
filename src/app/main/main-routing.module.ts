import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoGameComponent } from './pages/video-game/video-game.component';
import { PopularVideogameComponent } from './pages/popular-videogame/popular-videogame.component';
import { MostDownloadedVideogameComponent } from './pages/most-downloaded-videogame/most-downloaded-videogame.component';
import { UpcomingVideogameComponent } from './pages/upcoming-videogame/upcoming-videogame.component';
import { AuthGuard } from '../guards/auth.guard';



const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
  { path: 'home/videogames/new', component: VideoGameComponent,canActivate: [AuthGuard] },
  { path: 'home/videogames/more-popular', component: PopularVideogameComponent,canActivate: [AuthGuard] },
  { path: 'home/videogames/most-downloaded', component: MostDownloadedVideogameComponent,canActivate: [AuthGuard] },
  { path: 'home/videogames/upcomings', component: UpcomingVideogameComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
