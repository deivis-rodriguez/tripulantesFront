import { Component, OnInit } from '@angular/core';
import { Tripulante } from '../model/tripulante';
import { TripulanteService } from '../services/tripulante.service';

@Component({
  selector: 'app-tripulante',
  templateUrl: './tripulante.component.html',
  styleUrls: ['./tripulante.component.css']
})
export class TripulanteComponent implements OnInit {

  public tripulantes: Array<Tripulante>;

  constructor(private servicioTripulante: TripulanteService) {
    this.tripulantes = [];
  }

  ngOnInit(): void {
    this.servicioTripulante.listarTripulantes().subscribe((respuesta: Tripulante[]) => {
      this.tripulantes = respuesta;
    });
  }

}
