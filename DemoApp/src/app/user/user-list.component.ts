import { Component, OnInit } from '@angular/core';
import {UserService,User} from '../core'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: []
})
export class UserListComponent implements OnInit {

  lstUsers:User[];
  constructor(private userservice:UserService ) { }

  ngOnInit() {
    this.lstUsers=this.userservice.getAllUsers();
  }

}
