import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { AsistenciasComponent } from './asistencias/asistencias.component';

const routes: Routes = [
  {
    path:'',
    component: PerfilComponent
  },
  {
    path: '/asistencias',
    component: AsistenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }
