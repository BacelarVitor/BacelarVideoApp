import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as jwt_decode from 'jwt-decode';
import { TokenService } from '../token/token.service';
import { IUser } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new BehaviorSubject<IUser>(null);
  private userName: string;
  private userId: number;

  constructor(private tokenService: TokenService) {
    // tslint:disable-next-line: no-unused-expression
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  getUserName() {
    return this.userName;
  }

  getUserId() {
    return this.userId;
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as IUser;
    this.userName = user.nome;
    this.userId = user.id;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}
