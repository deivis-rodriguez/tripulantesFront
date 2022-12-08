import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editar-calificacion',
  templateUrl: './editar-calificacion.component.html',
  styleUrls: ['./editar-calificacion.component.css']
})
export class EditarCalificacionComponent implements OnInit {

  @Input() public nota: string ='';
  @Output() public notaEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  notaActualizada(){
    this.notaEvent.emit(parseFloat(this.nota))
  }

}
