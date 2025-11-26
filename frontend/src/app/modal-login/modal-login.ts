import { Component } from '@angular/core';
import { ModalService } from '../services/modal-service';

@Component({
  selector: 'app-modal-login',
  imports: [],
  templateUrl: './modal-login.html',
  styleUrl: './modal-login.scss',
})
export class ModalLogin {
  constructor(private modalService: ModalService) {}

  closeModal(): void {
    this.modalService.closeModal();
  }

  openVolunteerRegister(): void {
    this.modalService.openModal('volunteer');
  }

  openOrgRegister(): void {
    this.modalService.openModal('organization');
  }

  login(): void {
    // Lógica de inicio de sesión
    // window.location.href = 'admin_dashboard.html';
    // En Angular, usarías el Router: this.router.navigate(['/dashboard']);
    console.log('Login attempt');
    this.closeModal();
  }
}
