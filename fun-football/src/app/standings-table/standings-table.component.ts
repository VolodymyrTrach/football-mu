import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../../servises/get-data.service';

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

  constructor(public httpServise: GetDataService) {
  }

  ngOnInit(): void {
    this.httpServise.getTable().subscribe((res: any) => {
      this.fromApi = res.api.standings[0];
      console.log(this.fromApi);
      this.userPush();
    });
  }

  userPush() {
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
  }
}







