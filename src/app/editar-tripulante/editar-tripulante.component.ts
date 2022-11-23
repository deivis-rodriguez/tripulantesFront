import { Component, OnInit } from '@angular/core';
import { Tripulante } from '../model/tripulante';

@Component({
  selector: 'app-editar-tripulante',
  templateUrl: '../crear-tripulante/crear-tripulante.component.html',
  styleUrls: ['./editar-tripulante.component.css']
})
export class EditarTripulanteComponent implements OnInit {
  public tripulante !: Tripulante

  constructor() { }

  ngOnInit(): void {
  }

  regresar() { }

  guardarTripulante() { }

  modificarCalificaciones($event: Event) {

  }
}
