import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[LoginComponent]
})
export class AuthModule { }
