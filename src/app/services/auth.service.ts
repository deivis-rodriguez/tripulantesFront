import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signin } from '../model/signin';
import { Signup } from '../model/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_URL: string = 'http://localhost:8080/auth/'

  constructor(private http: HttpClient) { }

  public signin(signin: Signin){
    return this.http.post(`${this.AUTH_URL}signin`, signin);
  }

  public signup(signup: Signup){
    return this.http.post(`${this.AUTH_URL}signup`, signup);
  }
}
