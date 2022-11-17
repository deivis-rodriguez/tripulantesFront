export class Calificacion {

    nota: number;
    comentario: string;
    tipoNota: string;

    constructor() {
        this.nota = 0;
        this.comentario = '';
        this.tipoNota = '';
    }

}


export const calificaciones: Calificacion[] = [
    {
        nota: 3.4,
        comentario: '',
        tipoNota: 'taller'
    },
    {
        nota: 3.5,
        comentario: 'le faltó resolver dos ejercicios',
        tipoNota: 'quiz'
    },
    {
        nota: 0,
        comentario: 'no se presento',
        tipoNota: 'quiz'
    },
    {
        nota: 4.5,
        comentario: 'buen trabajo',
        tipoNota: 'quiz'
    },
    {
        nota: 3.6,
        comentario: 'faltó argumentación',
        tipoNota: 'parcial'
    }
];