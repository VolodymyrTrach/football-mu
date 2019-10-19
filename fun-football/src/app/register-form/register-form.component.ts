import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserSubjectService} from '../../../servises/user-subject.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  hideConfirm = true;
  submitted = false;
  newUser: object;
  registration = true;

  constructor(private fb: FormBuilder, public sendUser: UserSubjectService) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
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
    console.log(this.formControl.confirmPassword);
    console.log(this.formControl.password.errors);
    this.submitted = true;
    if (!this.registerForm.invalid) {
      this.newUser = this.registerForm.value;
      this.sendUser.sendUser(this.newUser);
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
