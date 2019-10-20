import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../servises/get-data.service';
import {UserSubjectService} from '../../servises/user-subject.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fun-football';
  teamLogo: object;
  newUser: object;

  constructor(public httpServise: GetDataService, public sendUser: UserSubjectService) {
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
}
