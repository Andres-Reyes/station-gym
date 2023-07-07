import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ActualizacionesPageRoutingModule } from './actualizaciones-routing.module';

import { ActualizacionesPage } from './actualizaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizacionesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ActualizacionesPage]
})
export class ActualizacionesPageModule {}
