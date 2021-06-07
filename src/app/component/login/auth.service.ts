import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGIN_URL = 'http://127.0.0.1:9090/api/user/login';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  login(userCredentials: any): Observable<any> {
    return this.http.post(this.LOGIN_URL, userCredentials, this.httpOptions);
  }

    redirectToDashboard(): void {
      this.router.navigate(['user', 'dashboard']);
    }

  getToken() {
    return sessionStorage.getItem('token');
  }

  getSideNavMenus() {
    return this.http.get('http://127.0.0.1:9090/api/url-permission');
  }

  logout() {
    this.router.navigate(['login']);
    window.sessionStorage.clear();
  }

  getUserRoles() {
    return this.http.get('http://127.0.0.1:9090/api/user/roles');
  }
}
