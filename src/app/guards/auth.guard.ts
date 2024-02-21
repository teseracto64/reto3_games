import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from '../main/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) 
    {
      
    }

  canActivate(): boolean {
    // Verificar si hay al menos un usuario en el array almacenado en el localStorage
    // Método que obtiene los usuarios del servicio
    const users : User[] = JSON.parse(localStorage.getItem('users') || '[]'); 
    const hasUsers = users && users.length > 0;

    if (hasUsers) {
      return true; // Permitir el acceso a la ruta
    } else {
      // No hay usuarios, redirigir a la página de inicio de sesión u otra página
      this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
      return false; // Bloquea el acceso a la ruta
    }
  }
}
