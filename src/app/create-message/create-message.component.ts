import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import * as InlineEditor from '../plugins/ckeditor/build/ckeditor'
import { UploadAdapter } from '../upload-adapter';

import { MessageService, Message } from '../message.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {
  public Editor = InlineEditor;

  message= {} as Message;

  constructor(private Storage: AngularFireStorage, private messagesService: MessageService, private router:Router) {

    this.message.color = '#f6ff7a';
    this.message.message = '';
   }
  
  ngOnInit(): void {
    
  }

  public onReady( editor ) {
   
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
    editor.plugins.get("FileRepository").createUploadAdapter = loader => {
      return new UploadAdapter(loader,this.Storage);
    };
  }
  public save(){
    console.log()
    this.messagesService.create(this.message);
    this.router.navigate(['']);
  }
}