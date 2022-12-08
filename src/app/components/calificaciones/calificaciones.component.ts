import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Calificacion } from '../../model/calificacion';
import { Tripulante } from '../../model/tripulante';
import { TripulanteService } from '../../services/tripulante.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  public canEditar = false;
  public indice = 0;
  public tripulante: Tripulante;
  @Output() eventoType = new EventEmitter<Calificacion[]>();

  constructor(private servicio: TripulanteService, private ruta: ActivatedRoute) {
    this.tripulante = { nombre: '', calificaciones: [], cursos: '', direccion: { calle: '', complemento: '', numero: '' }, idTripulante: '' }
  }

  ngOnInit(): void {
    const id = String(this.ruta.snapshot.paramMap.get('id'));
    this.servicio.obtenerTripulante(id).subscribe((respuesta) => {
      console.log(respuesta)
      this.tripulante = respuesta;
    })

  }

  actualizarNota(){
    this.eventoType.emit(this.tripulante.calificaciones);
  }

  modificarCalificaciones(evento: Event) {
    let signo = (evento.target as HTMLButtonElement).textContent;
    if (signo == '+') {
      this.tripulante.calificaciones.push({ nota: 0, tipoNota: '', comentario: '' })
    }
    else {
      this.tripulante.calificaciones.pop()
    }
    console.log(this.tripulante.calificaciones);

  }

}
