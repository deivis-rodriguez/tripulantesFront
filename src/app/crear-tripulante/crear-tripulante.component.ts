import { Component, OnInit } from '@angular/core';
import { Tripulante } from '../model/tripulante';
import { TripulanteService } from '../services/tripulante.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear-tripulante',
  templateUrl: './crear-tripulante.component.html',
  styleUrls: ['./crear-tripulante.component.css', '../tripulante/tripulante.component.css']
})
export class CrearTripulanteComponent implements OnInit {

  public tripulante: Tripulante;

  constructor(private tripulanteService: TripulanteService, private location: Location) {
    this.tripulante = { nombre: '', cursos: '', direccion: { calle: '', numero: '', complemento: '' }, calificaciones: [] };
  }

  ngOnInit(): void {
  }

  modificarCalificaciones(evento: Event) {
    let signo = (evento.target as HTMLButtonElement).textContent;
    if (signo == '+') {
      this.tripulante.calificaciones.push({ nota: 0, tipoNota: '', comentario: '' })
    }
    else {
      this.tripulante.calificaciones.pop()
    }
  }

  guardarTripulante() {
    this.tripulanteService.crearTripulante(this.tripulante).subscribe(() => {
      alert('tripulante creado')
      this.regresar()
    })
  }

  regresar(){
    this.location.back()
  }
}
