import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  modal: boolean = false;

  openModal(){
    this.modal = true;
  }

  closeModal(){
    this.modal = false;
  }
}
