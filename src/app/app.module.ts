import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    AuthModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
