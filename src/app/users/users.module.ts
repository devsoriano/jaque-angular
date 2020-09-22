import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';
import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    FilterPipe,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
