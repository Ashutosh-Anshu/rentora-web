import { Injectable, signal } from '@angular/core';
import { Menu } from '../../core/models';

@Injectable({
    providedIn: 'root',
})
export class MenuStore {

    readonly menus = signal<Menu[]>([]);

    setMenus(menus: Menu[]): void {
        this.menus.set(menus);
    }

    clear(): void {
        this.menus.set([]);
    }
}