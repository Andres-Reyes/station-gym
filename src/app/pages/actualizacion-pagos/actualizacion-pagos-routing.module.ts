import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizacionPagosPage } from './actualizacion-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizacionPagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizacionPagosPageRoutingModule {}
