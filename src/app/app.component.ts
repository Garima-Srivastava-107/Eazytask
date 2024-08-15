import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'starterProject';
  users = DUMMY_USERS;
  selectedUserName!:string;
  selectedUserId?:string;
//   onSelectUser(id:string){
//  console.log("The clicked user is :"+id);
//   let idx:number=-1;
//  for (let index = 0; index < this.users.length; index++) {
//   if(id===this.users[index].id){
//     idx=index;
//   }
//  }
//  if(idx!==-1)
//  this.selectedUserName=this.users[idx].name;
//   }
get selectedUser(){
  return this.users.find((user) => user.id === this.selectedUserId);
}
onSelectUser(id:string){
  this.selectedUserId = id;
}

}
