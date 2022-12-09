import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private location: Location) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken() == null) {      
      this.location.replaceState('/signin');
      window.location.reload()
    }
  }
}
