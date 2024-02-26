import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import './app.component.css';
import { Route } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:
   [ RouterOutlet,
     HeaderComponent,
     FooterComponent,
     HomeComponent,
     AboutComponent,
     CoursesComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routerbase';
}
