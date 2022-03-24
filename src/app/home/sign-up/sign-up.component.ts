import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SignUpService } from './sign-up.service';
import { INewUser } from './new-user';
import { PlatformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
              private formBuilder: FormBuilder,
              private signUpService: SignUpService,
              private router: Router,
              private platformDetectorService: PlatformDetectorService
            ) {}

  ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
          email: ['',
              [
                  Validators.required,
                  Validators.email
              ]
          ],
          name: ['',
              [
                  Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(50)
              ]
          ],
          password: ['',
              [
                  Validators.required,
                  Validators.minLength(8),
              ]
          ]
      });

      // tslint:disable-next-line: no-unused-expression
      this.platformDetectorService.isPlatformBrowser() &&
      this.emailInput.nativeElement.focus();
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as INewUser;
    this.signUpService
        .signup(newUser)
        .subscribe(
            () => this.router.navigate(['']),
            err => console.log(err)
        );
  }
}
