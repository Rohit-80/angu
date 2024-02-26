import { Component, inject, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive  } from '@angular/router';
import { MyserviceService } from '../services/myservice.service';
import { LoginComponent } from './login/login.component';
import { DescriptionComponent } from './description/description.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,LoginComponent,DescriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

   activeLink:ActivatedRoute = inject(ActivatedRoute);
   searchName:any = '';
   courses : any;
   route : Router = inject(Router)
   constructor(private Services : MyserviceService,){

   }

    ngOnInit(){
      this.activeLink.fragment.subscribe((val )=>{
          this.JumpTo(val);
      })
    }
    handleGoto(){
        console.log(this.activeLink.snapshot.paramMap.get('id'))
        // console.log(this.activeLink.snapshot.queryParamMap.get('search'))
    }

    JumpTo(val:string|any){
       document.getElementById(val)?.scrollIntoView({behavior:'smooth'})
    }

    onSearchValue(search:string){
        this.route.navigate(['courses'],{queryParams : {search : search}})
    }

}
