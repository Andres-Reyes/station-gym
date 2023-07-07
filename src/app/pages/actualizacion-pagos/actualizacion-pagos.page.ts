import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { Registro } from 'src/app/shared/registro.interface';
import { FirestoreService } from '../../services/firestore.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';
import { PagosService } from 'src/app/services/pagos.service';
import * as moment from 'moment';
@Component({
  selector: 'app-actualizacion-pagos',
  templateUrl: './actualizacion-pagos.page.html',
  styleUrls: ['./actualizacion-pagos.page.scss'],
})
export class ActualizacionPagosPage implements OnInit {
  registro: Registro;
  forma: FormGroup;
  registroID = null;
  fecha: any;
  constructor( private formBilder: FormBuilder, private db: FirestoreService, private pagoService: PagosService,
               private routerActivate: ActivatedRoute, private   nav: NavController,
               private loaudingController: LoadingController, private router: Router) {
this.CrearFormulario();
// tslint:disable-next-line: no-string-literal
this.registroID = this.routerActivate.snapshot.params[ 'id' ];
moment.locale('es');
const hoy = moment();
// tslint:disable-next-line: quotemark
const formato = "YYYY-MM-DD";
this.fecha = hoy.format(formato);
}
ngOnInit(){
if (this.registroID){
this.loadTodo();
}
}
async loadTodo(){
const loading = await this.loaudingController.create({
message: 'Cargando Información.....'
});
await loading.present();
this.db.getTodo(this.registroID).subscribe(res => {
loading.dismiss();
this.registro = res;
});
}
get validacionCedula(){
  return this.forma.get('cedula').invalid && this.forma.get('cedula').touched;
}
get validacionNombre(){
  return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
}
get validacionFecha(){
  return this.forma.get('fechaPago').invalid && this.forma.get('fechaPago').touched;
}
get validacionDias(){
  return this.forma.get('dias').invalid && this.forma.get('dias').touched;
}
CrearFormulario(){
  this.forma = this.formBilder.group({
    idU: ['', Validators.required],
    cedula: ['', Validators.required],
    nombre: ['', Validators.required],
    fechaPago: ['', Validators.required],
    dias: ['', Validators.required],
  });
}
GuardarUsuario(){
  if (this.forma.invalid){
  return Object.values(this.forma.controls).forEach( control => {
  control.markAsTouched();
  console.log('ocurrio un error');
  });
  } else{
    this.pagoService.AgregarPago(this.forma.value);
    alert('Pago Realizado Con Exito');
    this.router.navigate(['tabs/tab4']);
  }
}

}
