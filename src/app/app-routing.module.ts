import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { CursosComponent } from './cursos/cursos.component';
import { InicioComponent } from './inicio/inicio.component';
import { TripulanteComponent } from './tripulante/tripulante.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'calificaciones/:id', component: CalificacionesComponent},
  {path:'tripulantes', component: TripulanteComponent},
  {path:'inicio', component: InicioComponent},
  {path:'cursos', component: CursosComponent},
  {path:'cronograma', component: CronogramaComponent},
  {path:'ayuda', component: AyudaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
