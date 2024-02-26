import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface UserInterface {
   usernname : string,
   password : string
};
@Injectable({
  providedIn: 'root'
})
export class UsersService {



  User : UserInterface[] = [
     { usernname : 'Oggay', password : '12345'},
     { usernname : 'Zig', password : '12345'},
  ]


  constructor() {

   }

   
}
