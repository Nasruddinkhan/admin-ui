import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { SharedModule } from '../shared';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [LoginComponent, SingupComponent, DashboardComponent];
const COMPONENTS_DYNAMIC: [] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC]
})
export class RoutesModule { }
