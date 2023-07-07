import { Token } from '../shared/token.interface';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
@Injectable({
    providedIn: 'root'
  })
  export class TokenService {
    private firestoreCollection: AngularFirestoreCollection<Token>;
    constructor(private db: AngularFirestore){
        this.firestoreCollection = db.collection<Token>('Token');

    }
    AgregarRegistro(token: Token){
        return this.firestoreCollection.add(token);
      }
  }
