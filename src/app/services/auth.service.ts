
import { Injectable } from '@angular/core';
import { User } from '../shared/user.interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';
/* import { Observable, of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { registerLocaleData } from '@angular/common'; */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
/* public user$: Observable<User>; */
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    /* this.user$ = this.afAuth.authState.pipe(
     switchMap((user) => {
       if (user){
        return this.afs.doc<User>(`User/${user.uid}`).valueChanges();
       }
       return of(null);
       })
     ); */
  }



// metodo de cerrar sesion con firebase
  async logout(): Promise<void>{
try{
  await this.afAuth.signOut();
  this.router.navigate(['/']);
}
catch (error){
console.log('Error ->', error);
}
}



// metodo de logue con firebase
  async login(email: string, password: string): Promise<User>{
    try{
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);

      /* this.updateUserData(user); */
      return user;
    }
    catch (error){
      alert('Usuario o Contraseña Incorrecto');

    }
  }



  // metodo de registro de usuarios con firebase
  async register( email: string, password: string): Promise<User>{
    try{
     const {user} = await this.afAuth.createUserWithEmailAndPassword(email, password);
     /* await this.sendVerificationEmail(); */
     return user;
    }
    catch (error){
    alert('Usuario o Contraseña incorrecta');
    }
  }



 /*  // metodo de verificacion del correo
   async sendVerificationEmail(): Promise<void>{
    try{
      return (await this.afAuth.currentUser).sendEmailVerification();
    }
    catch (error){
    console.log('Error ->', error);
    }
  } */



  // metodo de cambiar la clave del usuario
  async resetPassword(email: string): Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch (error){
    console.log('Error ->', error);
    }
  }
/*     //  metodo de verificación
   private updateUserData(user: User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`User/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName
    };
    return userRef.set(data, {merge: true});
  } */
}
