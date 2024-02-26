import { Injectable, inject } from '@angular/core';
import { UsersService , UserInterface } from './users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   route : Router = inject(Router)
  constructor(private user : UsersService) { 
  
  }
  curUser : any;
  IsLogin : boolean = false;
  Credentials(username : string , password : string) {
     this.curUser = this.user.User.find(usr => usr.password === password &&  usr.usernname === username);
     if(this.curUser == undefined){
         this.route.navigate(['/Login'])
         this.IsLogin = false;
     }else{
        this.route.navigate(['/courses'],{queryParams : {login:true}});
        this.IsLogin = true;
     }
    }
     Logout(){
       this.IsLogin = false;
     }
  



}
