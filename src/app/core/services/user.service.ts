import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthUser } from '../models';
import { Result } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/users`;

  getUserById(userId: string): Observable<Result<AuthUser>> {
    return this.http.get<Result<AuthUser>>
      (`${this.baseUrl}/getUserById/${userId}`);
  }
}
