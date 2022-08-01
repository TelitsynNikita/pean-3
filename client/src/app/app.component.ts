import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  isLoggedIn: boolean = false
  isModal: boolean = false
  isAdmin: boolean = false

  constructor(private user: UserService) { }

  ngAfterViewInit() {
   this.user.isUser.subscribe((value: any) => value.role === 'ADMIN' ? this.isAdmin = true : this.isAdmin = false)
  }

  onChangeModal(event: any) {
    this.isModal = event
  }

  showModal() {
    console.log(this.isAdmin)
    this.isModal = true
  }

  ngOnDestroy() {
    this.user.isUser.unsubscribe()
  }
}
