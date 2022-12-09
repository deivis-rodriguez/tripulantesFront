import { Component } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tripulantes MINTIC';
  nombreUsuario = '';
  constructor(private userService: UsuarioService, private tokenStorage: TokenStorageService) {
    if (!!this.userService.getUsername()) {
      this.nombreUsuario = this.userService.getUsername();
    }
  }

  actualizar() {
    if (!!this.userService.getUsername()) {
      this.nombreUsuario = this.userService.getUsername();
    }
  }

  logout() {
    this.tokenStorage.signOut()
    window.location.reload()
  }
}
