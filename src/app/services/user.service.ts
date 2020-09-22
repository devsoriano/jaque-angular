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

    let i = 0;
    while (i < userList.length) {
      if (userList[i].email === email) {
        userList.splice(i, 1);
      } else {
        ++i;
      }
    }

    localStorage.setItem('users', JSON.stringify(userList));

    const returnData = {
      code: 200,
      message: 'User Successfully Deleted',
      data: JSON.parse(localStorage.getItem('users')),
    };

    return returnData;
  }

  doRegisterUser(data, email) {
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
