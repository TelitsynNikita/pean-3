import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TypeService {
  _typedApi = 'http://localhost:5200/api/type'

  constructor(private type: HttpClient) { }

  createType(type: any) {
    this.type.post(this._typedApi, type).subscribe()
  }

  getAllBrands() {
    return this.type.get(this._typedApi)
  }
}
