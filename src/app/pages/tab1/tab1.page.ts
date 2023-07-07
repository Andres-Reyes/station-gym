import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { Registro } from '../../shared/registro.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
registros: Registro[];
  constructor(private  router: Router, private authService: AuthService, private firestoreService: FirestoreService) {

  }

  ngOnInit(){
    this.AgregarUsuarioRecomendado();
  }
    AgresarUsuarioPrincipal(){
this.router.navigateByUrl('/tabs/tab1/usuario');
  }
  AgregarUsuarioRecomendado(){
    this.firestoreService.getTodos().subscribe(res => {
       this.registros = res;
    });
  }
  cerrarSesion(){
   this.authService.logout();
  }
}
