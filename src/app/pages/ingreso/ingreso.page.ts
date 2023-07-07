import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
/* import { FCM } from '@ionic-native/fcm/ngx'; */
import { getMaxListeners } from 'process';
import { TokenService } from '../../services/token.service';
import { Token } from '../../shared/token.interface';
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  constructor( private auth: AuthService, private router: Router, private db: TokenService  ) { }

  ngOnInit() {}


async onLogin(email, password){
  try{
    const user = await this.auth.login(email.value, password.value);

    if (user){
    this.router.navigate(['tabs']);
    if (user.email === 'stationfitnesgympza@gmail.com'){
      /* this.fcm.getToken().then(token => {
        this.guardarToken(token);
        }); */
      }
    }
  }
  catch (error){
    console.log('error ->', error);
  }
}
guardarToken(token){
 /*  this.db.AgregarRegistro(token); */
}
}
