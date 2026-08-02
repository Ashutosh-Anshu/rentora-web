import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReq, LoginRes, RegisterReq } from '../../models';
import { environment } from '../../../environments/environment';
import { Result } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = `${environment.apiUrl}/authentication`;

  constructor(private http: HttpClient) { }

  register(data: RegisterReq): Observable<Result<void>> {
    return this.http.post<Result<void>>(
      `${this.baseUrl}/register`,
      data
    );
  }

  login(data: LoginReq): Observable<Result<LoginRes>> {
    return this.http.post<Result<LoginRes>>(
      `${this.baseUrl}/login`,
      data
    );
  }
}
