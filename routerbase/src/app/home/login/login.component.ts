import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  user : UsersService = inject(UsersService)
  authService : AuthService = inject(AuthService)

   OnSubmit(username : string,password : string){
       this.authService.Credentials(username,password)
   }
}
