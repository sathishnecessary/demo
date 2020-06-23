import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  lstProject: User[] = [];
  constructor() { 
    this.lstProject = [
      { firstName: "sathish", lastName: "kumar", email: "sathishkumar@gmail.com" },
      { firstName: "shanmugam", lastName: "ganesh", email: "shanmugam@gmail.com" },
      { firstName: "muthu", lastName: "kumar", email: "muthukumar@gmail.com" }
    ]
  }

  getAllUsers(): User[] {
    
    return this.lstProject;
  }

  saveuser(newUser:User){
  this.lstProject.push(newUser);
  }

}
