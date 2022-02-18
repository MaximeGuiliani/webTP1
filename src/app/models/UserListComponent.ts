import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';
import { User } from './user.model';

@Component({
  selector: './UserListComponent.html',
  templateUrl: '../models/UserListComponent.html',
})
export class UserListComponent implements OnInit, OnDestroy {
  constructor(private httpService: HttpService) {}

  users: User[];
  userSubscription: Subscription;

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userSubscription = this.httpService
      .getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
      });
  }

  onSuppress(firstName) {
    if (confirm('Etes-vous sûr de la supprimer ?')) {
      this.suppressUser(firstName);
    } else {
      return null;
    }
  }
  suppressUser(firstName) {
    this.httpService.suppUser(firstName).subscribe((result) => {
      if (result.status === 200) {
        this.ngOnInit();
      } else {
        alert("le User n'existe pas !");
      }
    });
  }
}
