import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;


  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<LoginFormComponent>) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: '',
      password: '',
    });
  }

  // TODO: add service loginChack
  // TODO: fix reopening modal!
  signIn() {
    this.dialogRef.close(this.loginForm.value);
  }
}
