import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {UserModule} from './component/user/user.module';
import {AuthGuard} from './component/auth-guard/auth-guard';
import {authInterceptorProviders} from './component/auth-guard/request-interceptor';
import {AuthService} from './component/login/auth.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {path: 'user', loadChildren: () => UserModule, canActivateChild: [AuthGuard]},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [authInterceptorProviders, AuthService, AuthGuard]

})
export class AppRoutingModule {
}
