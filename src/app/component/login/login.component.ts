import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from './auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(response => {
      this.saveToken(response.token);
      // this.authService.redirectToDashboard();
      this.authService.getUserRoles().subscribe(res => {
        console.log('roles', res);
        this.route(res);
      });
    });
  }

  private saveToken(token: string): void {
    window.sessionStorage.removeItem('token');
    window.sessionStorage.setItem('token', token);
  }

  route(roles: any) {
    debugger;
    if (roles.includes('ROLE_ADMIN')) {
      this.routeToAdminDashboard();
    } else {
      this.routeToUserDashboard();
    }
  }

  public routeToAdminDashboard() {
    this.router.navigate(['user', 'dashboard']);
  }

  public routeToUserDashboard() {
    this.router.navigate(['user', 'bookings']);
  }

}
