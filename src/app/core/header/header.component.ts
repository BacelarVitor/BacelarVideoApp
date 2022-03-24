import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { IUser } from '../user/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$: Observable<IUser>;

  constructor(
      private userService: UserService,
      private router: Router
    ) {

      this.user$ = userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
