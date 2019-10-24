import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserCheckService {

  constructor(public httpRequest: HttpClient) {
  }

  postUser(user) {
    const body = {
      login: user.login,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      userType: 2
    };
    this.httpRequest.post('https://my-json-server.typicode.com/VolodymyrTrach/football-mu/users', body);
  }

  getUser() {
    return this.httpRequest.get('https://my-json-server.typicode.com/VolodymyrTrach/football-mu/users');
  }
}
