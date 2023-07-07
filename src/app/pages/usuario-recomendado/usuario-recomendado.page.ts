import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import { FirestoreRecomendadoService } from '../../services/firestoreRecomendado.service';
import { Registro } from '../../shared/registro.interface';
import {ActivatedRoute} from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-usuario-recomendado',
  templateUrl: './usuario-recomendado.page.html',
  styleUrls: ['./usuario-recomendado.page.scss'],
})
export class UsuarioRecomendadoPage  implements OnInit {
  registro: Registro;
  forma: FormGroup;
  registroID = null;
  fecha: any;
  constructor( private formBilder: FormBuilder, private db: FirestoreRecomendadoService,
               private routerActivate: ActivatedRoute , private   nav: NavController,
               private loaudingController: LoadingController  ) {
    this.CrearFormulario();
    this.registroID = this.routerActivate.snapshot.params['id'];
    moment.locale('es');
    const hoy = moment();
    const formato = " DD-MM-YYYY"
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
   get validacionEstado(){
    return this.forma.get('estado').invalid && this.forma.get('estado').touched;
  }
   get validacionFecha(){
    return this.forma.get('fecha').invalid && this.forma.get('fecha').touched;
  }
  get validacionNombre(){
  return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }
  get validacionCedula(){
    return this.forma.get('cedula').invalid && this.forma.get('cedula').touched;
  }
  get validacionRh(){
  return this.forma.get('rh').invalid && this.forma.get('rh').touched;
  }
  get validacionEdad(){
    return this.forma.get('edad').invalid && this.forma.get('edad').touched;
    }
  get validacionSexo(){
     return this.forma.get('sexo').invalid && this.forma.get('sexo').touched;
  }
  get validacionFechaNacimiento(){
    return this.forma.get('fechaNacimiento').invalid && this.forma.get('fechaNacimiento').touched;
   }
   get validacionCelular(){
    return this.forma.get('celular').invalid && this.forma.get('celular').touched;
    }
    get validacionEmail(){
      return this.forma.get('email').invalid && this.forma.get('email').touched;
    }
    get validacionActividadFisica(){
      return this.forma.get('actividadFisica').invalid && this.forma.get('actividadFisica').touched;
    }
    get validacionDeportePractica(){
      return this.forma.get('deportePractica').invalid && this.forma.get('deportePractica').touched;
    }
    get validacioFrecuenciaArterial(){
      return this.forma.get('frecuenciaArterial').invalid && this.forma.get('frecuenciaArterial').touched;
    }
    get validacionFrecuenciaCardiaca(){
      return this.forma.get('frecuenciaCardiaca').invalid && this.forma.get('frecuenciaCardiaca').touched;
    }
    get validacionEstatura(){
      return this.forma.get('estatura').invalid && this.forma.get('estatura').touched;
    }
    get validacionPeso(){
      return this.forma.get('peso').invalid && this.forma.get('peso').touched;
    }
    get validacionMasaCorporal(){
      return this.forma.get('masaCorporal').invalid && this.forma.get('masaCorporal').touched;
    }
    get validacionGrasaCorporal(){
      return this.forma.get('grasaCorporal').invalid && this.forma.get('grasaCorporal').touched;
    }
    get validacionUno(){
      return this.forma.get('recomendacionUno').invalid && this.forma.get('recomendacionUno').touched;
    }
    get validacionDos(){
      return this.forma.get('recomendacionDos').invalid && this.forma.get('recomendacionDos').touched;
    }
    get validacionTres(){
      return this.forma.get('recomendacionTres').invalid && this.forma.get('recomendacionTres').touched;
    }
    get validacionCuatro(){
      return this.forma.get('recomendacionCuatro').invalid && this.forma.get('recomendacionCuatro').touched;
    }
    get validacionCinco(){
      return this.forma.get('recomendacionCinco').invalid && this.forma.get('recomendacionCinco').touched;
    }
    get validacionSeis(){
      return this.forma.get('recomendacionSeis').invalid && this.forma.get('recomendacionSeis').touched;
    }
    get validacionSiete(){
      return this.forma.get('recomendacionSiete').invalid && this.forma.get('recomendacionSiete').touched;
    }
    get validacionPecho(){
      return this.forma.get('pecho').invalid && this.forma.get('pecho').touched;
    }
    get validacionBrazoDerecho(){
      return this.forma.get('brazoDerecho').invalid && this.forma.get('brazoDerecho').touched;
    }
    get validacionBrazoIzquierdo(){
      return this.forma.get('brazoIzquierdo').invalid && this.forma.get('brazoIzquierdo').touched;
    }
    get validacionAntebrazoDerecho(){
      return this.forma.get('antebrazoDerecho').invalid && this.forma.get('antebrazoDerecho').touched;
    }
    get validacionAntebrazoizquierdo(){
      return this.forma.get('antebrazoIzquierdo').invalid && this.forma.get('antebrazoIzquierdo').touched;
    }
    get validacionAbdomenSuperior(){
      return this.forma.get('abdomenSuperior').invalid && this.forma.get('abdomenSuperior').touched;
    }
    get validacionAbdomenMedio(){
      return this.forma.get('abdomenMedio').invalid && this.forma.get('abdomenMedio').touched;
    }
    get validacionCintura(){
      return this.forma.get('cintura').invalid && this.forma.get('cintura').touched;
    }
    get validacionCadera(){
      return this.forma.get('cadera').invalid && this.forma.get('cadera').touched;
    }
    get validacionPiernaDerecha(){
      return this.forma.get('piernaDerecha').invalid && this.forma.get('piernaDerecha').touched;
    }
    get validacionPiernaIzquierda(){
      return this.forma.get('piernaIzquierda').invalid && this.forma.get('piernaIzquierda').touched;
    }
    get validacionPantorrillaDerecha(){
      return this.forma.get('pantorrillaDerecha').invalid && this.forma.get('pantorrillaDerecha').touched;
    }
    get validacionPantorrillaIzquierda(){
      return this.forma.get('pantorrillaIzquierda').invalid && this.forma.get('pantorrillaIzquierda').touched;
    }
  CrearFormulario(){
    this.forma = this.formBilder.group({
      recomendado: ['', Validators.required],
      estado: ['', Validators.required],
      fecha: ['', Validators.required],
      nombre: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      rh: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      fechaNacimiento: ['', [Validators.required]],
      actividadFisica: ['', [Validators.required]],
      deportePractica: ['', [Validators.required]],
      frecuenciaArterial: ['', [Validators.required]],
      frecuenciaCardiaca: ['', [Validators.required]],
      estatura: ['', [Validators.required]],
      peso: ['', [Validators.required]],
      masaCorporal: ['', [Validators.required]],
      grasaCorporal: ['', [Validators.required]],
      recomendacionUno: ['', [Validators.required]],
      recomendacionDos: ['', [Validators.required]],
      recomendacionTres: ['', [Validators.required]],
      recomendacionCuatro: ['', [Validators.required]],
      recomendacionCinco: ['', [Validators.required]],
      recomendacionSeis: ['', [Validators.required]],
      recomendacionSiete: ['', [Validators.required]],
      pecho: ['', [Validators.required]],
      brazoDerecho: ['', [Validators.required]],
      brazoIzquierdo: ['', [Validators.required]],
      antebrazoDerecho: ['', [Validators.required]],
      antebrazoIzquierdo: ['', [Validators.required]],
      abdomenSuperior: ['', [Validators.required]],
      abdomenMedio: ['', [Validators.required]],
      cintura: ['', [Validators.required]],
      cadera: ['', [Validators.required]],
      piernaDerecha: ['', [Validators.required]],
      piernaIzquierda: ['', [Validators.required]],
      pantorrillaDerecha: ['', [Validators.required]],
      pantorrillaIzquierda: ['', [Validators.required]],
    });
  }
  GuardarUsuario(){
    if (this.forma.invalid){
    return Object.values(this.forma.controls).forEach( control => {
    control.markAsTouched();
    });
    } else{
      this.db.AgregarRegistro(this.forma.value);
      this.forma.reset();
      alert('Usuario Recomendado Agregado');
    }
  }
}

