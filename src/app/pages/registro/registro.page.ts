import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor( private auth: AuthService ) { }

  ngOnInit() {
  }
 async onRegister(email, password){
    try{
      const user = await this.auth.register(email.value, password.value);
      if (user){
      console.log('user ->', user);
      }
    }
    catch (error){
      console.log('error ->', error);
    }
  }

}
