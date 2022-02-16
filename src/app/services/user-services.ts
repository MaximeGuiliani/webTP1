import { User } from '../models/user.model';
import { Subject, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() {}

  userSubscription: Subscription;

  private users: User[] = [
    new User(
      'Maxime',
      'Guiliani',
      'maxime.guiliani@etu.univ-amu.fr',
      'License 3 informatique',
      ['web application', 'basket']
    ),
  ];

  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
