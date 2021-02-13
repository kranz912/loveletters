import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { MessagesComponent } from './messages/messages.component';
import { CreateMessageComponent } from './create-message/create-message.component'
const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children:[
    {
      path: '',
      component: MessagesComponent
    },
    {
      path:'createMessage',
      component: CreateMessageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
