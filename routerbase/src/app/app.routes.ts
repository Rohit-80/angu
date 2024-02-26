import { CoursesInterface } from './services/myservice.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { execPath } from 'process';
import { CourseComponent } from './course/course.component';
import path, { resolve } from 'path';
import { LoginComponent } from './home/login/login.component';
import { AuthguardService } from './services/authguard.service';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes =
   [
    {path:'',component:HomeComponent},
    {path : 'home', component:HomeComponent},
    {path : 'about', component:AboutComponent},
    {path : 'Login', component:LoginComponent},
    {path : 'contact', component:ContactComponent , canDeactivate : [AuthguardService]},
    {path : 'courses', resolve : {courser : AuthguardService} ,component:CoursesComponent},
    // {path : 'courses/course/:id', component:CourseComponent},
    {path:'courses', canActivateChild:[AuthguardService], children : [
      { path : 'course/:id', component : CourseComponent},
      { path : 'buynow', component : BuyNowComponent},

    ]},

    {path : '**' , component:NotfoundComponent}

   ];
