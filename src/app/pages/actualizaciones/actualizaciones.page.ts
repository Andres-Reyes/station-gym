import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';
import { PagosService } from 'src/app/services/pagos.service';
import { PagosUsuarios } from '../../shared/pagos.interface';

@Component({
  selector: 'app-actualizaciones',
  templateUrl: './actualizaciones.page.html',
  styleUrls: ['./actualizaciones.page.scss'],
})
export class ActualizacionesPage implements OnInit {
  pagos: PagosUsuarios;
  forma: FormGroup;
  pagosID = null;
  constructor(private formBilder: FormBuilder, private pagoService: PagosService,
              private routerActivate: ActivatedRoute, private   nav: NavController,
              private loaudingController: LoadingController, private router: Router) {
      this.CrearFormulario();
      this.pagosID = this.routerActivate.snapshot.params['id'];
   }
   ngOnInit(){
    if (this.pagosID){
    this.loadTodo();
    }
    }
    async loadTodo(){
    const loading = await this.loaudingController.create({
    message: 'Cargando Información.....'
    });
    await loading.present();
    this.pagoService.getTodo(this.pagosID).subscribe(res => {
    loading.dismiss();
    this.pagos = res;
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
        id: ['', Validators.required],
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
        this.pagoService.ActualizarPago(this.forma.value);
        alert('Pago Actualizado Con Exito');
        this.router.navigate(['tabs/tab3']);
      }
    }

}
