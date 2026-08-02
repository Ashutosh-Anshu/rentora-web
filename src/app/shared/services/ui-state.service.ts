import { inject, Injectable, signal } from "@angular/core";
import { MessageService } from "primeng/api";
import { NgxSpinnerService } from 'ngx-spinner';
import { SidebarStore } from "../stores";

@Injectable({
  providedIn: 'root',
})
export class UiStateService extends SidebarStore {

  readonly isDisabled = signal(false);
  private readonly spinner = inject(NgxSpinnerService);
  private readonly messageService = inject(MessageService);

  disableAction(): void {
    this.isDisabled.set(true);
  }

  enableAction(): void {
    this.isDisabled.set(false);
  }

  showLoadingPanel(): void {
    this.spinner.show();
  }

  hideLoadingPanel(): void {
    this.spinner.hide();
  }

  restore(): void {
    this.enableAction();
    this.hideLoadingPanel();
  }

  showSuccess(
    message: string = 'Changes saved successfully.',
    title: string = 'Success'
  ): void {
    this.messageService.add({
      severity: 'success',
      summary: title,
      detail: message,
    });
  }

  showError(
    message: string = 'Something went wrong. Please try again.',
    title: string = 'Error'
  ): void {
    this.messageService.add({
      severity: 'error',
      summary: title,
      detail: message,
    });
  }

  showWarning(
    message: string = 'Please review your input and try again.',
    title: string = 'Warning'
  ): void {
    this.messageService.add({
      severity: 'warn',
      summary: title,
      detail: message,
    });
  }

  showInfo(
    message: string = 'Here is some information.',
    title: string = 'Information'
  ): void {
    this.messageService.add({
      severity: 'info',
      summary: title,
      detail: message,
    });
  }

}


