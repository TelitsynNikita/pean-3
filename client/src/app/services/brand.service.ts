import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BrandService {
  _brandApi = 'http://localhost:5200/api/brand'
  constructor(private http: HttpClient) { }

  createBrand(brand: any) {
    this.http.post(this._brandApi, brand).subscribe()
  }

  getAllBrands() {
    return this.http.get(this._brandApi)
  }
}
