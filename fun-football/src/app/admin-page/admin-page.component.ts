import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../servises/get-data.service';


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
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  displayedColumns = ['rank', 'teamName', 'games', 'win', 'draw', 'lose', 'goalDifr', 'points'];
  dataSource = ELEMENT_DATA;
  fromApi;
  waitForApi = false;
  leagueName: string;
  idLeague: string;
  idTeam: string;
  teamLogo: string;

  constructor(public httpServise: GetDataService) {
  }

  ngOnInit(): void {
    this.getId();
    this.httpServise.getTable(this.idLeague).subscribe((res: any) => {
      this.fromApi = res.api.standings[0];
      this.leagueName = this.fromApi[0].group;
      this.rowPush();
    });
    this.httpServise.getTeam(this.idTeam).subscribe((res: any) => {
      this.teamLogo = res.api.teams[0].logo;
    });
  }

  rowPush() {
    this.dataSource.splice(0, 25);
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

  changeTable(idLeague) {
    this.waitForApi = false;
    this.idLeague = idLeague;
    this.httpServise.getTable(this.idLeague).subscribe((res: any) => {
      this.fromApi = res.api.standings[0];
      this.leagueName = this.fromApi[0].group;
      this.rowPush();
      this.updateSorage();
    });
  }

  changeLogo(idTeam) {
    this.httpServise.getTeam(idTeam).subscribe((res: any) => {
      this.teamLogo = res.api.teams[0].logo;
      this.idTeam = idTeam;
      this.updateSorage();
    });
  }

  getId() {
    const data = JSON.parse(sessionStorage.getItem('data'));
    this.idLeague = data.ligueId;
    this.idTeam = data.teamId;
  }

  updateSorage() {
    const data = JSON.parse(sessionStorage.getItem('data'));
    data.ligueId = this.idLeague;
    data.teamId = this.idTeam;
    sessionStorage.removeItem('data');
    sessionStorage.setItem('data', JSON.stringify(data));
    console.log(sessionStorage.getItem('data'));
  }
}
