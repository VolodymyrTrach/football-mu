import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': 'df6667ce45mshd372ca08891d991p12f3eajsnf1962b87f869'
    })
  };

  constructor(public httpget: HttpClient) {
  }

  getTeam(idTeam) {
    return this.httpget.get(`https://api-football-v1.p.rapidapi.com/v2/teams/team/${idTeam}`, this.httpOptions);
  }
 getAll() {
    return this.httpget.get('https://api-football-v1.p.rapidapi.com/v2/leagues', this.httpOptions);
  }

  getTable(idLeague) {
    return this.httpget.get(`https://api-football-v1.p.rapidapi.com/v2/leagueTable/${idLeague}`, this.httpOptions);
  }
}
