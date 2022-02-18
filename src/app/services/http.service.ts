import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';
@Injectable({ providedIn: 'root' })
export class HttpService {
  private serverUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  public getUsers(): Observable<any> {
    return this.http.get(this.serverUrl + 'users');
  }
  public createUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.serverUrl + 'users',
      user,
      this.httpOptions
    );
  }
}
