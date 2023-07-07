import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { AuthService } from '../../services/auth.service';
import { Registro } from '../../shared/registro.interface';
import { PagosService } from '../../services/pagos.service';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  registros: Registro[];
  constructor( private authService: AuthService, private db: FirestoreService, private pagos: PagosService) {
    this.busqueda();
  }
  ngOnInit() {
   /*  this.AgregarUsuarioRecomendado(); */
  }
  cerrarSesion(){
    this.authService.logout();
   }
/*   /*  AgregarUsuarioRecomendado(){
    this.db.getTodos().subscribe(res => {
       this.registros = res;
    });
  } */
  busqueda(){
  this.db.col$('InformacionUsuarios', ref => ref.where('estado', '==', "activo")).subscribe(r => {
    this.registros = r;
  });
  }
}
