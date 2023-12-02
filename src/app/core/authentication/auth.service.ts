import { Injectable } from '@angular/core';
import { BehaviorSubject, iif, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, share, switchMap, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { guest, Token, User } from './interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User>(guest);

  constructor(private http: HttpClient, private token: TokenService) {
    /*
    this.token
      .change()
      .pipe(
        switchMap(() => iif(() => this.check(), this.http.get<User>('/me'), of(guest))),
        map(user => Object.assign({}, guest, user))
      )
      .subscribe(user => this.user$.next(user));
      */
  }

  check() {
    console.log("check",  this.token.valid());
    return this.token.valid() ;
  }

  login(username: string, password: string, rememberMe = false) {

    return this.http
      .post<Token>('http://localhost:3000/auth', { username, password, remember_me: rememberMe })
      .pipe(
        tap(token => this.token.set({
          access_token: "nasruddin",
          token_type:"Beaer ",
          token:"nasruddin"
        })),
        map(() => this.check())
      );
  }

  logout() {
    return this.http.post('/auth/logout', {}).pipe(
      tap(() => this.token.clear()),
      map(() => !this.check())
    );
  }

  user() {
    return this.user$.pipe(share());
  }
}