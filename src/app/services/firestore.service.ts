import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Registro } from '../shared/registro.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
type collecitonPAgo<T> = string | AngularFirestoreCollection;
@Injectable({
    providedIn: 'root'
  })
  export class FirestoreService {
    private firestoreCollection: AngularFirestoreCollection<Registro>;
    private observadorFirestore: Observable<Registro[]>;
    private itemDoc: AngularFirestoreDocument<Registro>;
    constructor(private db: AngularFirestore){
      this.firestoreCollection = db.collection<Registro>('InformacionUsuarios');
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
      return this.firestoreCollection.doc<Registro>(id).valueChanges();
    }
    ActualizarRegistro(item){
      this.itemDoc = this.db.doc<Registro>(`InformacionUsuarios/${item.id}`);
      this.itemDoc.update(item);
    }

    AgregarRegistro(todo: Registro){
      return this.firestoreCollection.add(todo);
    }

    EliminarRegistro(item){
      this.itemDoc = this.db.doc<Registro>(`InformacionUsuarios/${item.id}`);
      this.itemDoc.delete();
    }
    private col<T>(ref: collecitonPAgo<T>, queryFn?): AngularFirestoreCollection {
      return typeof ref === "string" ? this.db.collection(ref, queryFn) : ref;
    }
  col$<T>(ref: collecitonPAgo<T>, queryFn?): Observable<any[]>{
    return this.col(ref, queryFn).snapshotChanges().pipe(
      map(docs => {
        return docs.map(d => {
          const data = d.payload.doc.data();
          const id = d.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }
  }

