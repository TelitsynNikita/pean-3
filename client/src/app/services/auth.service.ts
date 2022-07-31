import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
  _loginApi = 'http://localhost:5200/api/user/login'
  _registerApi = 'http://localhost:5200/api/user/registration'

  constructor(private http: HttpClient) { }

  onSignIn(user: any) {
    return this.http.post(this._loginApi, user)
  }

  onSignUp(user: any) {
    return this.http.post(this._registerApi, user)
  }
}
