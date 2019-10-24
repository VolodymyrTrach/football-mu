import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserSubjectService} from '../../../servises/user-subject.service';
import {UserCheckService} from '../../../servises/user-check.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  login: string;
  registerForm: FormGroup;
  hide = true;
  hideConfirm = true;
  submitted = false;
  newUser: object;
  registration = true;

  constructor(private fb: FormBuilder,
              public sendUser: UserSubjectService,
              public post: UserCheckService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      login: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validators: this.MustMatch('password', 'confirmPassword')
    });
  }

  get formControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.registerForm.invalid) {
      this.newUser = this.registerForm.value;
      this.post.postUser(this.newUser);
      this.sendUser.sendUser(this.newUser);
      this.post.getUser().subscribe(user => {
        console.log(user);
      });
      this.registration = false;
    }
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
