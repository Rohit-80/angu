import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
    activeRoute : ActivatedRoute = inject(ActivatedRoute);
    course : MyserviceService = inject(MyserviceService);
    courseId : any;
    mycourse : any;
     ngOnInit(){
            // this.courseId =  this.activeRoute.snapshot.params['id'];


            this.activeRoute.params.subscribe((id)=>{
                this.courseId = id['id'];
                this.mycourse = this.course.course.find((item)=>item.courseId == this.courseId);
            })
     }
}

