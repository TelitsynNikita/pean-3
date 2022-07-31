import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DeviceService {
  _deviceApi = 'http://localhost:5200/api/device'

  constructor(private http: HttpClient) { }

  createDevice(device: any) {
    this.http.post(this._deviceApi, device).subscribe()
  }

  getAllDevices() {
    return this.http.get(this._deviceApi)
  }

  getOneDevice(id: number) {
    return this.http.get(`${this._deviceApi}/${id}`)
  }
}
