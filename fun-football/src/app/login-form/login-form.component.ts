import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  // afterLogin = true;
  user: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: [''],
      password: [''],
    });
  }

  // TODO: add service loginChack
  signIn() {
    console.log(this.loginForm.value);
    this.user = this.loginForm.value.login;
    // this.afterLogin = false;
  }
}
