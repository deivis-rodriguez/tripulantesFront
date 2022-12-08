import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private TOKEN_KEY: string = 'jwt_token';

  constructor() { }

  public guardarToken(token: string): void {
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  public signOut(){
    window.sessionStorage.clear();
  }
}
