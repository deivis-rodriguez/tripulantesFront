import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tripulante } from '../model/tripulante';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TripulanteService {

  private urlTripulantes = 'http://localhost:8080/tripulantes';
  //private headers = {}

  constructor(private http: HttpClient/* , private tokenStorage: TokenStorageService */) { 
    //this.headers = {headers:{'Authorization': `Bearer ${this.tokenStorage.getToken()}`}}
  }

  public listarTripulantes() {
    return this.http.get<Tripulante[]>(this.urlTripulantes /*,  this.headers */);
  }
  
  public obtenerTripulante(id: string) {
    return this.http.get<Tripulante>(`${this.urlTripulantes}/${id}`);
  }

  public crearTripulante(tripulante: Tripulante) {
    return this.http.post<Tripulante>(this.urlTripulantes, tripulante);
  }

  public actualizarTripulante(id: string, tripulante: Tripulante) {
    return this.http.put<Tripulante>(`${this.urlTripulantes}/${id}`, tripulante);
  }

  public eliminarTripulante(id: string) {
    return this.http.delete<Tripulante>(`${this.urlTripulantes}/${id}`);
  }

}
