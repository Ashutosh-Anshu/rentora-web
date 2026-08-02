import { Component, inject } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { AvatarColorPipe, AvatarInitialsPipe, SidebarStore, UserStore } from '../../shared';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, AvatarModule, RippleModule, CommonModule, AvatarInitialsPipe, AvatarColorPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  private sidebarStore = inject(SidebarStore);
  private readonly userStore = inject(UserStore);
  readonly user = this.userStore.user;

  sidebarToggle(): void {
    this.sidebarStore.sidebarToggle();
  }



}
