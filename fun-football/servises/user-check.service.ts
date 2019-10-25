import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostNewUser} from './post';


@Injectable({
  providedIn: 'root'
})
export class UserCheckService {

  constructor(public httpRequest: HttpClient) {
  }

  postUser(postNewUser: PostNewUser): Observable<any> {
   return this.httpRequest.post('https://my-json-server.typicode.com/VolodymyrTrach/football-mu/users', postNewUser);
  }

  getUser() {
    return this.httpRequest.get('https://my-json-server.typicode.com/VolodymyrTrach/football-mu/users');
  }
}
