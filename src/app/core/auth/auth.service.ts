import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';

const API_URL = 'https://localhost:44398/api/';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private userService: UserService) { }

    authenticate(email: string, password: string) {

        return this.http.post(
            API_URL + 'Login/authenticate',
            { email, senha: password },
            { observe: 'response' }
          )
          .pipe(tap((res: any) => {
            console.log(res);
            const token: any = res.body.token;
            const authToken = token;
            this.userService.setToken(authToken);
          }));
    }
}
