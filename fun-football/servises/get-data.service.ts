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

  getTeam() {
    return this.httpget.get('https://api-football-v1.p.rapidapi.com/v2/teams/team/33', this.httpOptions);
  }

  getTable() {
    return this.httpget.get('https://api-football-v1.p.rapidapi.com/v2/leagueTable/2', this.httpOptions);
  }
}
