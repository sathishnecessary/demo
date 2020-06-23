import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import {UserService,User} from '../core'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: []
})

export class UserComponent implements OnInit {

  
  constructor(private fb: FormBuilder,private userservice:UserService,private router: Router) { }

  ngOnInit() {
  }

  userForm = this.fb.group({
    firstName:[''],
    lastName:[''],
    email:['']
  });

  onSubmit(){
    const result = Object.assign({}, this.userForm.value);
    this.userservice.saveuser(result);
    this.router.navigate(['/']);
  }
}
