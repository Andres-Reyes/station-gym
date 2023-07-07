import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { Registro } from '../../shared/registro.interface';
import { PagosService } from '../../services/pagos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  registros: Registro[];

  constructor( private authService: AuthService, private firestoreService: FirestoreService, private pagos: PagosService) {}
  ngOnInit(){
   this. ActualizarUsuario();
  }
 cerrarSesion(){
   this.authService.logout();
  }
  ActualizarUsuario(){
    this.firestoreService.getTodos().subscribe(res => {
       this.registros = res;
    });
  }
Eliminar(item){
  this.firestoreService.EliminarRegistro(item);
}

}

