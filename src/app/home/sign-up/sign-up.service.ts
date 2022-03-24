import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { INewUser } from './new-user';

const API_URL = 'https://localhost:44398/api/';

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) {}

  signup(newUser: INewUser) {
      return this.http.post(API_URL + 'Cliente', { nome: newUser.name, email: newUser.email, senha: newUser.password});
  }
}
