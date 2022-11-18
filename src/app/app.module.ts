import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { EditarCalificacionComponent } from './editar-calificacion/editar-calificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalificacionesComponent,
    InicioComponent,
    CursosComponent,
    CronogramaComponent,
    AyudaComponent,
    EditarCalificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
