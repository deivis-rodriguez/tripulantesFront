import { Calificacion } from "./calificacion";

export interface Tripulante {

    idTripulante?: string;
    nombre: string;
    cursos: string;
    direccion: {
        calle: string;
        numero: string;
        complemento: string
    },
    calificaciones: Calificacion[]

}