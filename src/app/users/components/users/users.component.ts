import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

interface UserInterface {
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  userList: UserInterface;
  userListData: UserInterface;
  filterData: string;

  constructor(private userService: UserService) {
    this.getUserList();
  }

  ngOnInit(): void {
    this.getUserList();
  }

  // Get user list
  getUserList() {
    const userList = this.userService.getAllUsers();
    this.success(userList);
  }

  // Delete a user with its index
  deleteUserByEmail(email: string) {
    const userList = this.userService.deleteUserByEmail(email);
    this.success(userList);
  }

  openAddUser() {
    // Get the modal addUser
    const modal = document.getElementById('modalAddUser');
    modal.style.display = 'block';
  }

  closeAddUser() {
    // update list user
    this.getUserList();
    // close modal addUSer
    const modal = document.getElementById('modalAddUser');
    modal.style.display = 'none';
  }

  // Get user list success
  success(data: any) {
    this.userListData = data.data;
  }
}
