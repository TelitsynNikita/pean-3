import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class BrandService {
  _brandApi = 'http://localhost:5200/api/brand'
  responseMessage = new BehaviorSubject('')

  constructor(private http: HttpClient) { }

  createBrand(brand: any) {
    this.http.post(this._brandApi, brand).subscribe(
      (res: any) => this.responseMessage.next(''),
      (err: any) => this.responseMessage.next(err.error.message)
    )
  }

  getAllBrands() {
    return this.http.get(this._brandApi)
  }
}
