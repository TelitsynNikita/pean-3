import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent {
  form: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'name': ['', [Validators.required]],
      'price': ['', [Validators.required]],
      'img': ['', [Validators.required]],
      'typeId': ['', [Validators.required]],
      'brandId': ['', [Validators.required]]
    })
  }
}
