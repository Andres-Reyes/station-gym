import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PagosUsuarios } from '../../shared/pagos.interface';
import { PagosService } from '../../services/pagos.service';
import * as moment from 'moment';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  pagosUsuario: PagosUsuarios[];
  pagosUsuarios: PagosUsuarios[];
  diaPago: number;
  constructor( private authService: AuthService, private pagos: PagosService) {
    this.recuperacionPAgos();
    this.fechaDiaria();
  }
  cerrarSesion(){
    this.authService.logout();
   }
   recuperacionPAgos(){
    this.pagos.getTodos().subscribe(res => {
       this.pagosUsuario = res;
    });
  }
  fechaDiaria(){
    this.pagos.col$('PagoUsuarios').subscribe( listDoc => {
      const hoy = moment();
      // tslint:disable-next-line: no-shadowed-variable
      this.pagosUsuario.forEach(( element, index) => {
        this.pagosUsuario[index].vencimiento = element.dias - hoy.diff(element.fechaPago, 'days');
        if (element.dias - hoy.diff(element.fechaPago, 'days') === 2 ){
          alert('Al usuario: ' + element.nombre + ' le quedan dos dias pagados');
        }
        if (element.dias - hoy.diff(element.fechaPago, 'days')  === 1){
          alert('Al usuario: ' + element.nombre + ' le queda un dia pagados');
        }
        if (element.dias - hoy.diff(element.fechaPago, 'days') === 0 ){
          alert('Al usuario: ' + element.nombre + ' hoy se le acaban los dias pagos');
        }
        if (element.dias - hoy.diff(element.fechaPago, 'days')  === -1 ){
          this.pagos.EliminarPago(element.id);
        }
      });
    }); }
}
