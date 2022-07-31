import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean = false
  isModal: boolean = false

  onChangeModal(event: any) {
    this.isModal = event
  }

  showModal() {
    this.isModal = true
  }
}
