import { Component, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-login',
  imports: [],
  templateUrl: './modal-login.html',
  styleUrl: './modal-login.scss',
})
export class ModalLogin {

  onModalClick = output(); 

  onRegisterVolClick = output();

  onRegisterOrgClick = output();

  onClose = output();

  constructor(private router: Router) {}

  // Este método emite un evento que el AppComponent captura
  closeModal(): void {
    this.onClose.emit();
  }

  login():void{
    this.onModalClick.emit();
    this.router.navigate(['/dashboard']);
  }

  openVolunteerRegister():void{
    this.onRegisterVolClick.emit();
  }

  openOrgRegister():void{
    this.onRegisterOrgClick.emit();
  }


}
