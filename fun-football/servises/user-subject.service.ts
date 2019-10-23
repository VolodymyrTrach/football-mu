import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSubjectService {
  public newUserSubscribe$ = new Subject<object>();
  public newAdminLogo$ = new Subject<object>();
  public newAdminTable$ = new Subject<any>();

  sendUser(user: object) {
    this.newUserSubscribe$.next({newUser: user});
  }

  sendLogo(logo) {
    this.newAdminLogo$.next(logo);
  }

  sendTable(tableSource) {
    this.newAdminTable$.next(tableSource);
  }
}
