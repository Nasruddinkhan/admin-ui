import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/authentication/auth.service';
import { TokenService } from 'src/app/core';
import { filter } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  styleObj?:any={color: 'red'};
  loginForm!: FormGroup;
  appearance : MatFormFieldAppearance = 'fill';
  isSubmitted!: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  ngAfterViewInit(): void {
    console.log('LoginComponent not implemented. ngAfterViewInit');
  }
  ngOnInit(): void {
    console.log('LoginComponent not implemented. ngOnInit');
    this.inilizeForm();
  }
  inilizeForm() {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }
  doLogin(){
    this.isSubmitted = true;
    console.table(this.loginForm.value);
    if(this.loginForm.invalid){
      return;
    }
    console.table(this.loginForm.value);
    this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
    .pipe(filter(authenticated => authenticated))
      .subscribe(
        () => this.router.navigateByUrl('/'),
        (error: HttpErrorResponse) => {
          console.table(error.status);
        }
      );
  };



}
