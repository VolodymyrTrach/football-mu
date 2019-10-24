import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {UserCheckService} from '../../../servises/user-check.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  users: any;
  logMessage = true;

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<LoginFormComponent>,
              public checkUsers: UserCheckService) {
  }

  ngOnInit() {
    this.checkUsers.getUser().subscribe(user => {
      this.users = user;
    });
    this.loginForm = this.fb.group({
      login: '',
      password: '',
    });
  }

  signIn() {
    const logInUser = this.loginForm.value;
    const founded = this.users.find((item) => {
      return item.login === logInUser.login;
    });
    if (founded) {
        this.dialogRef.close(founded);
    } else {
      this.logMessage = false;
    }
  }

  exit() {
    this.dialogRef.close();
  }
}
