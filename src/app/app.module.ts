import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment';
import { CreateMessageComponent } from './create-message/create-message.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'
import { AngularFireDatabase } from '@angular/fire/database';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CreateMessageComponent,
    HomeComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MDBBootstrapModule.forRoot(),
    CKEditorModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
