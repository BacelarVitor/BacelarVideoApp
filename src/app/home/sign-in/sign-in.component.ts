import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private platformDetectorService: PlatformDetectorService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
                '',
                [
                  Validators.required,
                  Validators.email
                ]
              ],
      password: ['', Validators.required]
    });
  }

  login() {

    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService
        .authenticate(email, password)
        .subscribe(
            () => this.router.navigate(['movies']),
            err => {
                console.log(err);
                this.loginForm.reset();
                // tslint:disable-next-line: no-unused-expression
                this.platformDetectorService.isPlatformBrowser() &&
                        this.emailInput.nativeElement.focus();
                alert('Email ou senha inválidos');
            }
        );
}
}
