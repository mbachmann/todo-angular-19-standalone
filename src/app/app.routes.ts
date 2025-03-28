import { Routes } from '@angular/router';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TempConversionComponent } from './temp-conversion/temp-conversion.component';

export const routes: Routes = [
  {
    path: 'home',
    component: TodoListsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'todoitem/:id',
    component: TodoItemsComponent,
  },
  {
    path: 'myfirst',
    component: MyFirstComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'temp',
    component: TempConversionComponent,
  },
];
