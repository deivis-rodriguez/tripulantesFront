import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public username: string = '';

  getUsername(){
    return this.username;
  }
  setUsername(username:string){
    this.username = username;
  }
  constructor() { }
  
}
