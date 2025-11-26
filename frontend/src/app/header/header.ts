import { Component } from '@angular/core';
import { ModalService } from '../services/modal-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private modalService: ModalService) {}

  openLogin(): void {
    this.modalService.openModal('login');
  }

  openRegister(): void {
    // Por defecto, abrir registro de voluntarios
    this.modalService.openModal('volunteer'); 
  }
}
