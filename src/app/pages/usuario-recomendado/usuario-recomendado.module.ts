import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioRecomendadoPageRoutingModule } from './usuario-recomendado-routing.module';

import { UsuarioRecomendadoPage } from './usuario-recomendado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioRecomendadoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsuarioRecomendadoPage]
})
export class UsuarioRecomendadoPageModule {}
