import { Observable } from 'rxjs';
import { Injectable  } from '@angular/core';


export interface CoursesInterface  {
  courseId : string,
  courseName : string,
  courseLogo :string,
  courseDesc : string
}

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  course = [
    {
      courseId : '1',
      courseName : 'Cat1',
      courseLogo : '../../assets/id1.jpeg',
      courseDesc : 'Meow Meow'
    },
    {
      courseId : '2',
      courseName : 'Cat2',
      courseLogo : '../../assets/id2.jpeg',
      courseDesc : 'Meow Meow'
    },
    {
      courseId : '3',
      courseName : 'Cat3',
      courseLogo : '../../assets/id3.jpeg',
      courseDesc : 'Meow Meow'
    },
    {
      courseId : '4',
      courseName : 'Cat4',
      courseLogo : '../../assets/id4.jpeg',
      courseDesc : 'Meow Meow'
    },
    {
      courseId : '5',
      courseName : 'Cat5',
      courseLogo : '../../assets/id5.jpeg',
      courseDesc : 'Meow Meow'
    },
    {
      courseId : '6',
      courseName : 'Cat6',
      courseLogo : '../../assets/id6.jpeg',
      courseDesc : 'Meow Meow'
    }


  ]
  constructor(){

   }
   getAllCourses(){
    return new Observable<CoursesInterface[]>((sub)=>{
        setTimeout(()=>sub.next(this.course),2000)
     })
  }
}
