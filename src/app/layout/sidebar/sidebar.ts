import { Component, effect, inject, signal, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { MenuStore, SidebarStore } from '../../shared/stores';
import { Menu } from '../../core/models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [AvatarModule, DrawerModule, ButtonModule, RippleModule, StyleClassModule, RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private menuStore = inject(MenuStore);
  protected sidebarStore = inject(SidebarStore);

  menus = signal<Menu[]>([]);
  expandedId = signal<string | null>(null);

  public loadMenu = effect(() => {
    this.menus.set(this.menuStore.menus());
  });

  toggleExpand(menuId: string): void {
    this.expandedId.set(this.expandedId() === menuId ? null : menuId);
  }

  closeSidebar(): void {
    this.sidebarStore.closeSidebar();
  }

  onMenuClick(): void {
    if (window.innerWidth <= 768) {
      this.sidebarStore.closeSidebar();
    }
  }
}