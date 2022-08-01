import { Component, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BrandService} from "../../services/brand.service";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements AfterViewInit{
  brandForm: FormGroup
  isBrand: string = ''

  constructor(private formBuilder: FormBuilder, private brandService: BrandService) {
    this.brandForm = formBuilder.group({
      'name': ['', [Validators.required]]
    })
  }

  ngAfterViewInit() {
    this.brandService.responseMessage.subscribe(value => this.isBrand = value)
  }

  async createBrand(form: any) {
    await this.brandService.createBrand(form.value)
    this.brandForm.reset()
  }
}
