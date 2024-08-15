import { Component, computed, input, Input,output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

type User={
  id: string,
      name: string,
      avatar: string,
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// selectedUser = DUMMY_USERS[randomIndex];
// get imagePath(){
//   return 'assets/users/'+this.selectedUser.avatar;
// }
selectedUser = input.required<User>();
imagePath = computed(() => {
  return 'assets/users/' + this.selectedUser().avatar;
})
// @Input({ required: true }) avatar!:string;
// @Input({ required: true }) name!:string;
// @Input({ required: true }) id!:string;
select=output<string>();
// @Output() select = new EventEmitter();
// get imagePath(){
//   return 'assets/users/'+this.avatar;
// }

onSelectUser(){
  this.select.emit(this.selectedUser().id);
}
}