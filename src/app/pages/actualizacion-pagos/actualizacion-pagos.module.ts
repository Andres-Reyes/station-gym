import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ActualizacionPagosPageRoutingModule } from './actualizacion-pagos-routing.module';

import { ActualizacionPagosPage } from './actualizacion-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizacionPagosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ActualizacionPagosPage]
})
export class ActualizacionPagosPageModule {}
