import { Injectable } from '@angular/core';
import { User } from '../main/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  addUser(user: User): void {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  login(username: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    return users.some(user => user.username === username && user.password === password);
  }

  logout(): void {
    localStorage.removeItem('users');
    localStorage.removeItem('games');
  }
}
