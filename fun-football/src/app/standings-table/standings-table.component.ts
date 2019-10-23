import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../../servises/get-data.service';
import {UserSubjectService} from '../../../servises/user-subject.service';

export interface Standings {
  rank: number;
  logo: string;
  teamName: string;
  goalDifr: number;
  points: number;
  games: number;
  win: number;
  draw: number;
  lose: number;
}

const ELEMENT_DATA: Standings[] = [];

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.scss']
})
export class StandingsTableComponent implements OnInit {
  displayedColumns = ['rank', 'teamName', 'games', 'win', 'draw', 'lose', 'goalDifr', 'points'];
  dataSource = ELEMENT_DATA;
  fromApi;
  waitForApi = false;
  leagueName: string;
  id = 2;

  constructor(public httpServise: GetDataService,
              public sendUser: UserSubjectService) {
  }

  ngOnInit(): void {
    this.sendUser.newAdminTable$.subscribe(table => {
      console.log(table);
      this.id = table;
      console.log('11111111111111');
    });
    this.userPush();
    console.log('jhsabvcjhbvjahvscjhvj');
  }

  userPush() {
    this.dataSource.splice(0, 25);
    this.httpServise.getTable(this.id).subscribe((res: any) => {
      this.fromApi = res.api.standings[0];
      this.leagueName = this.fromApi[0].group;
      console.log(res);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.fromApi.length; i++) {
        const newRow = {
          rank: this.fromApi[i].rank,
          logo: this.fromApi[i].logo,
          teamName: this.fromApi[i].teamName,
          goalDifr: this.fromApi[i].goalsDiff,
          points: this.fromApi[i].points,
          games: this.fromApi[i].all.matchsPlayed,
          win: this.fromApi[i].all.win,
          lose: this.fromApi[i].all.lose,
          draw: this.fromApi[i].all.draw
        };
        this.dataSource.push(newRow);
      }
      this.waitForApi = true;
    });
  }
}







