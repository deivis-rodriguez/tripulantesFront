import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { CrearTripulanteComponent } from './components/crear-tripulante/crear-tripulante.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EditarTripulanteComponent } from './components/editar-tripulante/editar-tripulante.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SigninComponent } from './components/signin/signin.component';
import { TripulanteComponent } from './components/tripulante/tripulante.component';

const routes: Routes = [
  {path:'', redirectTo:'signin', pathMatch:'full'},
  {path:'calificaciones/:id', component: CalificacionesComponent},
  {path:'tripulantes', component: TripulanteComponent},
  {path:'inicio', component: InicioComponent},
  {path:'cursos', component: CursosComponent},
  {path:'cronograma', component: CronogramaComponent},
  {path:'ayuda', component: AyudaComponent},
  {path:'signin', component: SigninComponent},
  {path:'crear-tripulante', component: CrearTripulanteComponent},
  {path:'editar-tripulante/:id', component: EditarTripulanteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
