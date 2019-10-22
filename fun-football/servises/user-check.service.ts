import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCheckService {

  constructor(public httpget: HttpClient) {
  }

  getUser() {
    return this.httpget.get('https://my-json-server.typicode.com/VolodymyrTrach/football-mu/users');
  }

  userChek(logInUser, users) {
    const founded = users.find((item) => {
      return item.login === logInUser.login;
    });
    if (founded) {
      return founded;
    } else {
      return false;
    }
  }
}
