import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './components/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { EditarCalificacionComponent } from './components/editar-calificacion/editar-calificacion.component';
import { TripulanteComponent } from './components/tripulante/tripulante.component';
import { CrearTripulanteComponent } from './components/crear-tripulante/crear-tripulante.component';
import { EditarTripulanteComponent } from './components/editar-tripulante/editar-tripulante.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalificacionesComponent,
    InicioComponent,
    CursosComponent,
    CronogramaComponent,
    AyudaComponent,
    EditarCalificacionComponent,
    TripulanteComponent,
    CrearTripulanteComponent,
    EditarTripulanteComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
