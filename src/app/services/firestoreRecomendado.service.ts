import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {RegistroUserRecomendado} from '../shared/usuarioRecomendado.interface';

@Injectable({
    providedIn: 'root'
  })
  export class FirestoreRecomendadoService {
    private firestoreCollection: AngularFirestoreCollection<RegistroUserRecomendado>;
    private observadorFirestore: Observable<RegistroUserRecomendado[]>;
    constructor(private db: AngularFirestore){
      this.firestoreCollection = db.collection<RegistroUserRecomendado>('InformacionUsuarios');
      this.observadorFirestore = this.firestoreCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map (a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return {id, ... data};
        });
      }
      ));
    }

    getTodos(){
      return this.observadorFirestore;
    }

    getTodo(id: string){
      return this.firestoreCollection.doc<RegistroUserRecomendado>(id).valueChanges();
    }

    ActualizarRegistro(todo: RegistroUserRecomendado, id: string){
      return this.firestoreCollection.doc(id).update(todo);
    }

    AgregarRegistro(todo: RegistroUserRecomendado){
      return this.firestoreCollection.add(todo);
    }

    EliminarRegistro(id: string){
      return this.firestoreCollection.doc(id).delete();
    }
  }

