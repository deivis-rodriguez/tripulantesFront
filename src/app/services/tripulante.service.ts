import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tripulante } from '../model/tripulante';

@Injectable({
  providedIn: 'root'
})
export class TripulanteService {

  private urlTripulantes = 'http://localhost:8080/tripulantes';

  constructor(private http: HttpClient) { }

  public listarTripulantes() {
    return this.http.get<Tripulante[]>(this.urlTripulantes);
  }

  public crearTripulante(tripulante: Tripulante) {
    return this.http.post<Tripulante>(this.urlTripulantes, tripulante);
  }

  public obtenerTripulante(id: string) {
    return this.http.get<Tripulante>(`${this.urlTripulantes}/${id}`);
  }

  public actualizarTripulante(id: string, tripulante: Tripulante) {
    return this.http.put<Tripulante>(`${this.urlTripulantes}/${id}`, tripulante);
  }

  public eliminarTripulante(id: string) {
    return this.http.delete<Tripulante>(`${this.urlTripulantes}/${id}`);
  }

}
