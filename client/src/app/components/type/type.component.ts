import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TypeService} from "../../services/type.service";

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent {
  typeForm: FormGroup
  isType: string = ''

  constructor(private formBuilder: FormBuilder, private typeService: TypeService) {
    this.typeForm = formBuilder.group({
      'name': ['', [Validators.required]]
    })
  }

  ngAfterViewInit() {
    this.typeService.responseMessage.subscribe(value => this.isType = value)
  }

  async createType(form: any) {
    await this.typeService.createType(form.value)
    this.typeForm.reset()
  }
}
