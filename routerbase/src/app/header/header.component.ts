import { AuthService } from './../services/auth.service';
import { Router, RouterLink, RouterLinkActive, Routes, ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { routes } from '../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers : [Router]
})
export class HeaderComponent {
  auth : AuthService = inject(AuthService);
  isLoged : any = false;
  
  active:ActivatedRoute = inject(ActivatedRoute)
  route : Router = inject(Router)
 constructor(){
    
 }

  ngOnInit(){
      this.active.queryParamMap.subscribe((data)=>{
           this.isLoged = data.get('login') === 'true' ?true : false;
      })
  }

  logOut(){
    this.auth.Logout();
    this.route.navigate(['/Login']);
    
  }
}
