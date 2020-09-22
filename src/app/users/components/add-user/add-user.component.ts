import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

interface UserInterface {
  name: string;
  fathersLastName: string;
  mothersLastName: string;
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
  messageSuccess: string;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
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
        fathersLastName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        mothersLastName: [
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
    const userRegister = this.userService.doRegisterUser(this.usersAddForm.value, this.email);
    if (userRegister.code === 200) {
      this.messageSuccess = 'Usuario agregado correctamente';
    }
  }

}
