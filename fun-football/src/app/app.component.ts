import {Component, OnInit} from '@angular/core';
import {GetDataService} from './servises/get-data.service';
import {UserSubjectService} from './servises/user-subject.service';
import {MatDialog} from '@angular/material';
import {LoginFormComponent} from './login-form/login-form.component';
import {UserCheckService} from './servises/user-check.service';
import {PostNewUser} from './servises/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  afterLogin = true;
  teamLogo: object;
  admin = false;
  isUserLogged = false;
  logInUser: object;
  data = {
    ligueId: 2,
    teamId: 33
  };

  constructor(public httpServise: GetDataService,
              public sendUser: UserSubjectService,
              public httpPost: UserCheckService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    sessionStorage.clear();
    this.userTypeCheck();
    this.httpServise.getTeam(this.data.teamId).subscribe((res: any) => {
      this.teamLogo = res.api.teams[0].logo;
    });
    this.sendUser.newUserSubscribe$.subscribe((user: object) => {
      // @ts-ignore
      console.log(user.newUser.login);
      const postUser = new PostNewUser();
      // @ts-ignore
      postUser.login = user.newUser.login;
      // @ts-ignore
      postUser.password = user.newUser.password;
      // @ts-ignore
      postUser.firstName = user.newUser.firstName;
      // @ts-ignore
      postUser.lastName = user.newUser.lastName;
      // @ts-ignore
      postUser.email = user.newUser.email;
      postUser.userType = 1;
      this.httpPost.postUser(postUser);
    });
    this.setValues();
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginFormComponent);
    dialogRef.afterClosed().subscribe(data => {
        this.logInUser = data;
        this.isUserLogged = true;
        this.userTypeCheck();
      }
    );
  }

  userTypeCheck() {
    if (this.logInUser) {
      this.afterLogin = false;
      // @ts-ignore
      if (this.logInUser.userType === '1') {
        this.admin = true;
        // @ts-ignore
        this.setData(this.logInUser.userType);
      } else {
        // @ts-ignore
        this.setData(this.logInUser.userType);
      }
    }
  }

  setData(type) {
    sessionStorage.removeItem('userType');
    // @ts-ignore
    sessionStorage.setItem('userType', type);
  }

  setValues() {
    sessionStorage.setItem('data', JSON.stringify(this.data));
  }

  removeData() {
    sessionStorage.removeItem('userType');
  }

  logout() {
    this.logInUser = null;
    this.admin = false;
    this.afterLogin = true;
    this.removeData();
    const data = JSON.parse(sessionStorage.getItem('data'));
    this.data.teamId = data.teamId;
    this.data.ligueId = data.ligueId;
    this.ngOnInit();
  }
}
