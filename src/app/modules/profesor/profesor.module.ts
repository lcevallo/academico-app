import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesorRoutingModule } from './profesor-routing.module';
import { AsistenciasComponent } from './asistencias/asistencias.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [AsistenciasComponent, PerfilComponent],
  imports: [
    CommonModule,
    ProfesorRoutingModule
  ]
})
export class ProfesorModule { }
