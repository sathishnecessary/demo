import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './user.component';
import {UserListComponent} from './user-list.component'
import {UserRoutingModule} from './user.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent,UserListComponent],
  imports: [
    CommonModule,UserRoutingModule,FormsModule,ReactiveFormsModule
  ]
})

export class UserModule { }
