import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SharedModule } from '../shared';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    RouterModule
  ]
})
export class ThemeModule { }
