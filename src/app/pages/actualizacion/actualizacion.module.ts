import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizacionPageRoutingModule } from './actualizacion-routing.module';

import { ActualizacionPage } from './actualizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizacionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ActualizacionPage]
})
export class ActualizacionPageModule {}
