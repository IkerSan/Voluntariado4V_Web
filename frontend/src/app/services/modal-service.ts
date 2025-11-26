import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type ModalType = 'login' | 'volunteer' | 'organization' | null;
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  
  private activeModalSubject = new BehaviorSubject<ModalType>(null);
  public activeModal$ = this.activeModalSubject.asObservable();

  openModal(type: ModalType): void {
    this.activeModalSubject.next(type);
  }

  closeModal(): void {
    this.activeModalSubject.next(null);
  }
}
