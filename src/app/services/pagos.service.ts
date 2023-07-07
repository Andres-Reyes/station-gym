import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { PagosUsuarios } from '../shared/pagos.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type collecitonPAgo<T> = string | AngularFirestoreCollection;
@Injectable({
    providedIn: 'root'
  })
  export class PagosService {
    private firestoreCollection: AngularFirestoreCollection<PagosUsuarios>;
    private observadorFirestore: Observable<PagosUsuarios[]>;
    private itemDoc: AngularFirestoreDocument<PagosUsuarios>;
    constructor(private db: AngularFirestore){
      this.firestoreCollection = db.collection<PagosUsuarios>('PagoUsuarios');
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
      return this.firestoreCollection.doc<PagosUsuarios>(id).valueChanges();
    }
    ActualizarPago(item){
      this.itemDoc = this.db.doc<PagosUsuarios>(`PagoUsuarios/${item.id}`);
      this.itemDoc.update(item);
    }

    AgregarPago(todo: PagosUsuarios){
      return this.firestoreCollection.add(todo);
    }

    EliminarPago(item){
      this.itemDoc = this.db.doc<PagosUsuarios>(`PagoUsuarios/${item}`);
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
