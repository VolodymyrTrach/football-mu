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
  users: object;


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

  // TODO: fix service loginChack
  // TODO: fix reopening modal!(its 2 of them)
  signIn() {
    this.checkUsers.userChek(this.loginForm.value, this.users).subscribe((res: any) => {
      console.log(res);
    });
    this.dialogRef.close(this.loginForm.value);
  }
}
