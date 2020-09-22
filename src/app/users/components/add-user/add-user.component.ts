import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

interface UserInterface {
  name: string;
  email: string;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  usersAddForm: FormGroup;
  email: any;
  userListData: UserInterface;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm(null);
  }

  ngOnInit(): void {
  }

  createForm(data) {
    if (data === null) {
      this.usersAddForm = this.formBuilder.group({
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        email: ['', [Validators.required]],
      });
    }
  }

  doRegister() {
    const userRegister = this.userService.doRegisterUSer(this.usersAddForm.value, this.email);
    if (userRegister.code === 200) {
      console.log('success');
    }
  }

}
