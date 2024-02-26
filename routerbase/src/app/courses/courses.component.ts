import { ActivatedRoute, ROUTES, Route, Routes, Router, RouterLink } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CoursesInterface, MyserviceService } from '../services/myservice.service';
import { NgFor } from '@angular/common';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  CoursesService: MyserviceService = inject(MyserviceService);
  Course : CoursesInterface[] = [];
  constructor() {
    // this.Course = ;
  }
  auth : AuthService = inject(AuthService)
  activeLink: ActivatedRoute = inject(ActivatedRoute);
  searchName: any = '';
  courses: any;
  route: Router = inject(Router)




  ngOnInit() {
    this.activeLink.queryParamMap.subscribe((data)=>{
      this.searchName = data.get('search');
      console.log(this.searchName)
      if (this.searchName == '' || this.searchName == null || this.searchName == undefined) {
       this.CoursesService.getAllCourses().subscribe((data : CoursesInterface[])=>{
        // console.log('data')
            this.Course = data;
        });

      this.Course =    this.activeLink.snapshot.data['courser'];


      } else {
        this.Course = this.CoursesService.course.filter((item) => item.courseName === ('' + this.searchName));
        console.log(this.Course)
      }

    })

    // this.route.navigate(['/courses'])
  }

  handleClick(id: string) {
    this.route.navigate(['courses', 'course', id]);
  }

  BuyNow(id : string){
    if(this.auth.IsLogin)
     this.route.navigate(['buynow'],{relativeTo : this.activeLink});
    else 
    this.route.navigate(['/Login']);
  }

}
