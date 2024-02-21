import { Component } from '@angular/core';
import { Card } from '../../models/card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-video-game',
  templateUrl: './video-game.component.html',
  styleUrls: ['./video-game.component.css']
})
export class VideoGameComponent {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.cardForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      releaseDate: ['', Validators.required],
      image: ['', Validators.required],
      rating: [''],
      downloads: [''],
      comingSoon: ['']
    });
  }

  ngOnInit(): void {
  }

  get controls() {
    return this.cardForm.controls;
  }

  addCard(): void {
    if (this.cardForm.valid) {
      const newCard: Card = {
        title: this.controls['title'].value,
        description: this.controls['description'].value,
        releaseDate: this.controls['releaseDate'].value,
        image: this.controls['image'].value,
        rating: this.controls['rating'].value || 0,
        downloads: this.controls['downloads'].value || 0,
        comingSoon: this.controls['comingSoon'].value
      };
      let existingCards: Card[] = JSON.parse(localStorage.getItem('games') || '[]');
      existingCards.push(newCard);
      localStorage.setItem('games', JSON.stringify(existingCards));
      this.cardForm.reset();
       // Mostrar toast
       this.snackBar.open('Juego agregado correctamente', 'Cerrar', {
        duration: 3000, // Duración del toast en milisegundos
        horizontalPosition: 'end', // Posición horizontal del toast ('start', 'center', 'end')
        verticalPosition: 'top' // Posición vertical del toast ('top', 'bottom')
      });
    }
  }
}
