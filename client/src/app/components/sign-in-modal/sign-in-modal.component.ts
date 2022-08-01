import {Component, EventEmitter, Input, Output, AfterViewInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import jwtDecode from "jwt-decode";
import {UserService} from "../../services/user.service";

interface IForm {
  value: {
    email: string,
    password: string
  }
}

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent {
  form: FormGroup
  isRegister = true
  @Input() modal = false
  @Output() change = new EventEmitter<boolean>()

  constructor(private builder: FormBuilder, private auth: AuthService, public user: UserService) {

    this.form = builder.group({
      'email': ['', [Validators.email, Validators.required]],
      'password': ['', [Validators.required]]
    })

  }

  onSignIn(form: IForm) {
    this.auth.onSignIn(form.value).subscribe((value: any) => this.user.changeUser(jwtDecode(value.token)))
    this.closeModal()
  }

  onSignUp(form: IForm) {
    this.auth.onSignUp(form.value).subscribe(value => console.log(value))
    this.closeModal()
  }

  onRegisterOfLogin() {
    this.isRegister = !this.isRegister
    this.form.reset()
  }

  onChangeModal(event: any) {
    const t = event.target
    if (
      t.classList == 'modal' ||
      t.classList == 'bi bi-x-lg close'
    ) {
      this.closeModal()
    }
  }

  closeModal() {
    this.modal = false
    this.change.emit(this.modal)
  }
}
