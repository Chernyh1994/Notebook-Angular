import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, NgForm, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  public loginForm: FormGroup = new FormGroup({
    email: this.email,
    password: this.password
  });

  getErrorMessageEmail(): string {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword(): string {
    return this.password.hasError('required') ? 'You must enter a value' :
    '';
  }

  submit() {
    console.log(this.loginForm.value);
  }

  ngOnInit(): void {
  }

}
