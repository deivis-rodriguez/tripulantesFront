import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Signin } from '../../model/signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public sign: Signin = { username: '', password: '' }
  public error: boolean = false;
  public errorMsg: string = '';

  constructor(private auth: AuthService, private tokenStorage: TokenStorageService, private location: Location) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.location.replaceState('/inicio');
      window.location.reload()
    }
  }

  login() {
    this.auth.signin(this.sign).subscribe({
      next: (res: any) => {
        this.tokenStorage.guardarToken(res.token)
        this.location.replaceState('/inicio');
        window.location.reload()
      },
      error: err => {
        this.error = true;
        this.errorMsg = err.error.msg;
      }
    })
  }
}
