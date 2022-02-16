import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user-services';
import { User } from './user.model';

@Component({
  selector: './UserListComponent.html',
  templateUrl: '../models/UserListComponent.html',
})
export class UserListComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService,
    private httpService: HttpService
  ) {}

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
    //ligne du dessous a enlever peut etre

    this.userService.emitUsers();
  }
}
