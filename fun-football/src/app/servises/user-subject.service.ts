import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSubjectService {
  public newUserSubscribe$ = new Subject<object>();

  sendUser(user: object) {
    this.newUserSubscribe$.next({newUser: user});
  }
}
