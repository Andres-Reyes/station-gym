import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'usuario',
    loadChildren: () => import('../usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'usuario-recomendado/:id',
    loadChildren: () => import('../usuario-recomendado/usuario-recomendado.module').then( m => m.UsuarioRecomendadoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
