import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './pages/singup/singup.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthGuard } from '../core';

const routes: Routes = [  {
  path: '',
  component: AdminLayoutComponent,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  children: [
     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: { title: 'Dashboard', titleI18n: 'dashboard' },
    }
  ],
},
{
  path: 'auth',
  component: AuthLayoutComponent,
  children: [
    { path: 'login', component: LoginComponent, data: { title: 'Login', titleI18n: 'login' } },
    {
      path: 'register',
      component: SingupComponent,
      data: { title: 'Register', titleI18n: 'register' },
    },
  ],
},
{ path: '**', redirectTo: 'dashboard' }];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
        }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule { }
