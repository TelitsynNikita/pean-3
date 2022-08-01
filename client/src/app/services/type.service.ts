import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class TypeService {
  _typedApi = 'http://localhost:5200/api/type'
  responseMessage = new BehaviorSubject('')

  constructor(private http: HttpClient) { }

  createType(type: any) {
    this.http.post(this._typedApi, type).subscribe(
      (res: any) => this.responseMessage.next(''),
      (err: any) => this.responseMessage.next(err.error.message)
    )
  }

  getAllBrands() {
    return this.http.get(this._typedApi)
  }
}
