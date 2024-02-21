import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  webSiteName:string='Tienda de videojuegos - Registro';
  constructor(private formBuilder: FormBuilder,private router:Router, private gameService:GameService, private userService:UserService) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }


  registerNewUser() {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      this.userService.addUser({ username, password });
      this.registerForm.reset();
      this.gameService.createGames();   
      this.router.navigate(['/home']);
    }
  }

  get controls(){
    return this.registerForm.controls;
  }

  validatePassword():boolean{
    let passwordValue=this.controls['confirmPassword'].value??'';
    return this.controls['confirmPassword'].touched &&passwordValue &&passwordValue!==this.controls['password'].value;
  }
}
