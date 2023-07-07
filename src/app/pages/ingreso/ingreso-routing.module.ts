import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoPage } from './ingreso.page';


const routes: Routes = [
  {
    path: '',
    component: IngresoPage
  },
  {
    path: 'tabs',
    loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('../registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('../recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoPageRoutingModule {}
