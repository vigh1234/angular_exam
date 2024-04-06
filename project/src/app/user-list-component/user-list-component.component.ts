import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrl: './user-list-component.component.css'
})
export class UserListComponentComponent {
  userList=[
    {id:1,name:'raju'},
    {id:2,name:'naveen'},
    {id:3,name:'vighnesh'},
    {id:4,name:'sangeeth'},
  ]
  inputValue=''
}
