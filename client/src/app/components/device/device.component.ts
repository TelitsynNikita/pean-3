import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TypeService} from "../../services/type.service";
import {BrandService} from "../../services/brand.service";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent {
  form: FormGroup
  types: any = []
  brands: any = []

  constructor(
    private formBuilder: FormBuilder,
    private typeService: TypeService,
    private brandService: BrandService,
    private deviceService: DeviceService
  ) {
    this.form = formBuilder.group({
      'name': ['', [Validators.required]],
      'price': ['', [Validators.required]],
      'img': ['', [Validators.required]],
      'typeId': [0, [Validators.required]],
      'brandId': [0, [Validators.required]]
    })

    this.typeService.getAllBrands().subscribe(value => this.types = value)
    this.brandService.getAllBrands().subscribe(value => this.brands = value)
  }

  createDevice(form: any) {
    this.deviceService.createDevice(form.value)
    this.form.reset()
  }
}
