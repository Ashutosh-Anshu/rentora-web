import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarStore {
  readonly isSidebarOpen = signal(true);

  sidebarToggle(): void {
    this.isSidebarOpen.update(open => !open);
  }

  openSidebar(): void {
    this.isSidebarOpen.set(true);
  }

  closeSidebar(): void {
    this.isSidebarOpen.set(false);
  }
}
