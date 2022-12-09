import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/model/signup';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signup: Signup = { password: '', username: '', email: '', role: 'ROLE_USER' }
  public error: boolean = false;
  public errorMsg: string = '';

  constructor(private auth: AuthService, private tokenStorge: TokenStorageService, private location: Location, private userService: UsuarioService) { }

  ngOnInit(): void {
    this.tokenStorge.signOut()
  }

  registro() {
    this.auth.signup(this.signup).subscribe({
      next: (res: any) => {
        alert('registro exitoso!')
        this.auth.signin({ username: this.signup.username, password: this.signup.password }).subscribe((res: any) => {
          this.tokenStorge.guardarToken(res.token)
          this.userService.setUsername(this.signup.username)
          this.location.replaceState('/inicio')
          window.location.reload()
        })

      },
      error: (err: any) => {
        this.error = true;
        this.errorMsg = err.error.msg
      }
    })
  }

  cancelar() {
    this.location.back()
  }
}
