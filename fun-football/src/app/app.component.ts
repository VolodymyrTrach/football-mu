import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../servises/get-data.service';
import {UserSubjectService} from '../../servises/user-subject.service';
import {MatDialog} from '@angular/material';
import {LoginFormComponent} from './login-form/login-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  afterLogin = true;
  title = 'fun-football';
  teamLogo: string;
  newUser: object;
  admin = false;

  constructor(public httpServise: GetDataService, public sendUser: UserSubjectService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.httpServise.getTeam().subscribe((res: any) => {
      this.teamLogo = res.api.teams[0].logo;
    });
    this.sendUser.newUserSubscribe$.subscribe(user => {
      this.newUser = user;
      console.log(this.newUser);
    });
  }

  openDialog() {
    this.dialog.open(LoginFormComponent);
    const dialogRef = this.dialog.open(LoginFormComponent);
    dialogRef.afterClosed().subscribe(
      data => console.log('Dialog output:', data)
    );
  }
}
