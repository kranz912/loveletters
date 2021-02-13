import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages$: AngularFireList<any[]>;
  constructor(private afdatabase: AngularFireDatabase) {
    this.messages$ = this.afdatabase.list('/messages');
   }
   create(value:any):any{
     return this.messages$.push(value);
   }
}


export interface Message{
  message: String,
  color: String
}