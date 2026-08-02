import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Result } from '../constants';
import { Menu } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/menus`;

  getMenus(): Observable<Result<Menu[]>> {
    return this.http.get<Result<Menu[]>>(
      `${this.baseUrl}/getMenus`
    );
  }
}
