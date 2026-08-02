import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, AvatarModule, RippleModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  sidebarVisible = signal(false);

  sidebarToggle() {
    this.sidebarVisible.update(value => !value);
  }


}
