import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class UserService {
  isUser = new BehaviorSubject({})

  changeUser(value: any) {
    this.isUser.next(value)
  }
}
