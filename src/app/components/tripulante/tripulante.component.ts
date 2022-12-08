import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Tripulante } from '../../model/tripulante';
import { TripulanteService } from '../../services/tripulante.service';

@Component({
  selector: 'app-tripulante',
  templateUrl: './tripulante.component.html',
  styleUrls: ['./tripulante.component.css']
})
export class TripulanteComponent implements OnInit {

  public tripulantes: Array<Tripulante>;

  constructor(private tokenStorage: TokenStorageService, private location: Location, private servicioTripulante: TripulanteService) {
    this.tripulantes = [];
  }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.servicioTripulante.listarTripulantes().subscribe((respuesta: Tripulante[]) => {
        this.tripulantes = respuesta;
      });
    }else{
      this.location.replaceState('/signin');
      window.location.reload()
    }
    
  }

  eliminarTripulante(i: number) {
    let id = this.tripulantes[i].idTripulante;
    if(id != undefined){
      this.servicioTripulante.eliminarTripulante(id).subscribe(()=>{
        alert('tripulante eliminado')
        this.tripulantes.splice(i, 1)
      });
    }

  }
}
