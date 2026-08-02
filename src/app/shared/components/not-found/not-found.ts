import { Component, signal, ViewChild } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Drawer, DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { Times } from '@primeicons/angular/times';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { Home } from '@primeicons/angular/home';
import { Bookmark } from '@primeicons/angular/bookmark';
import { ChartLine } from '@primeicons/angular/chart-line';
import { Table } from '@primeicons/angular/table';
import { Search } from '@primeicons/angular/search';
import { Users } from '@primeicons/angular/users';
import { Comments } from '@primeicons/angular/comments';
import { Calendar } from '@primeicons/angular/calendar';
import { Cog } from '@primeicons/angular/cog';
import { Folder } from '@primeicons/angular/folder';
import { ChartBar } from '@primeicons/angular/chart-bar';
import { Bars } from '@primeicons/angular/bars';

@Component({
  selector: 'app-not-found',
    imports: [AvatarModule, DrawerModule, ButtonModule, RippleModule, StyleClassModule, Times, ChevronDown, Home, Bookmark, ChartLine, Table, Search, Users, Comments, Calendar, Cog, Bars],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  @ViewChild('drawerRef')
  drawerRef!: Drawer;


  visible: boolean = false;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }
}
