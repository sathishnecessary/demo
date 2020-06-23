import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {UserListComponent} from './user/user-list.component'
import {UserRoutingModule } from './user/user.routing.module'

const routes: Routes = [
  /*{
    path: 'users',component:UserListComponent
  },
  {
    path:'user', component:UserComponent
  }
  ,{
    path:'',component:UserListComponent

  } */
{
  path:'',loadChildren:'./user/user.module#UserModule'

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
