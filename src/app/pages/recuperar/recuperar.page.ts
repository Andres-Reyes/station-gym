import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(private authServise: AuthService, private router: Router) { }

  ngOnInit() {
  }
 async onResetPassword(email){
try{
 await this.authServise.resetPassword(email.value);
 this.router.navigate(['/']);
}
catch (error){
alert('Debes Ingresar el Correo Electrónico');
}
  }
}
