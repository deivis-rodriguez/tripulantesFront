import { Component } from '@angular/core';
import { Calificacion, calificaciones } from '../Calificaciones';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent {

  public listaCalificaciones = calificaciones;

  constructor() {
  }

  guardar() {
    alert('calificación guardada')
  }

  editar() {
    alert('información actualizada')
  }

  validarColor(Calificacion: Calificacion): string {
    let color: string;
    if (Calificacion.nota < 3) {
      color = '#e62727';
    } else if (Calificacion.nota >= 3 && Calificacion.nota < 4) {
      color = '#fa8e29';
    } else {
      color = '#6fe63d';
    }


    return color;
  }
}
