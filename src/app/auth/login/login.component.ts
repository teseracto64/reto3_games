import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  webSiteName:string='VideoGames Store';
  constructor(private formBuilder: FormBuilder,private router:Router, private gameService:GameService, private userService:UserService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  login() {
    

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Llamar al método login del servicio UserService
      const isAuthenticated = this.userService.login(username, password);

      if (isAuthenticated) {
        this.gameService.createGames();
        // Después de la autenticación, puedes redirigir al usuario a la página principal
        this.router.navigate(['/home']);
      } else 
      {
        this.snackBar.open('Credenciales incorrectas', 'Cerrar', {
          duration: 3000, // Duración del toast en milisegundos
          horizontalPosition: 'end', // Posición horizontal del toast ('start', 'center', 'end')
          verticalPosition: 'top' // Posición vertical del toast ('top', 'bottom')
        });
      }
    }
    
  }

  get controls(){
    return this.loginForm.controls;
  }
}
