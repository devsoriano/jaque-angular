import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  // Get all users from local storage
  getAllUsers() {
    let usersList: any;
    if (localStorage.getItem('users') && localStorage.getItem('users') !== '') {
      usersList = {
        code: 200,
        message: 'Users List Fetched Successfully',
        data: JSON.parse(localStorage.getItem('users')),
      };
    } else {
      usersList = {
        code: 200,
        message: 'Users List Fetched Successfully',
        data: JSON.parse(localStorage.getItem('users')),
      };
    }
    return usersList;
  }

  // Delete user
  deleteUserByEmail(email: string) {
    const userList = JSON.parse(localStorage.getItem('users'));
    userList.splice(email, 1);
    localStorage.setItem('users', JSON.stringify(userList));

    const returnData = {
      code: 200,
      message: 'User Successfully Deleted',
      data: JSON.parse(localStorage.getItem('users')),
    };

    return returnData;
  }

  doRegisterUSer(data, email) {
    const userList = JSON.parse(localStorage.getItem('users'));
    let returnData;
    userList.unshift(data);
    localStorage.setItem('users', JSON.stringify(userList));
    returnData = {
      code: 200,
      message: 'User Successfully Added',
      data: JSON.parse(localStorage.getItem('users')),
    };

    return returnData;
  }
}
