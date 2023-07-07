import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioRecomendadoPage } from './usuario-recomendado.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioRecomendadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRecomendadoPageRoutingModule {}
