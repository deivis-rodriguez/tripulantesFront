import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Calificacion } from '../model/calificacion';
import { Tripulante } from '../model/tripulante';
import { TripulanteService } from '../services/tripulante.service';

@Component({
  selector: 'app-editar-tripulante',
  templateUrl: '../crear-tripulante/crear-tripulante.component.html',
  styleUrls: ['./editar-tripulante.component.css']
})
export class EditarTripulanteComponent implements OnInit {
  public tripulante !: Tripulante


  constructor(private servicio: TripulanteService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    const id = String(this.ruta.snapshot.paramMap.get('id'));
    this.servicio.obtenerTripulante(id).subscribe((respuesta) => {
      console.log(respuesta)
      this.tripulante = respuesta;
    })
  }

  regresar() { }

  guardarTripulante() {
    const id = String(this.ruta.snapshot.paramMap.get('id'));
    console.log(this.tripulante.calificaciones);

    this.servicio.actualizarTripulante(id, this.tripulante).subscribe(
      (respuesta) => {
        console.log(respuesta);
        alert('tripulante actualizado')

      }
    )
  }

  actualizarNotas(evento: Calificacion[]) {
    this.tripulante.calificaciones = evento;
  }

}
