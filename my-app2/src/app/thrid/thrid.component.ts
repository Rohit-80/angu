import { Subject , Observer, Observable, from } from 'rxjs';
import { Component, EventEmitter, inject, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ServicService } from '../services/servic.service';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './thrid.component.html',
  styleUrl: './thrid.component.css'
})
export class ThridComponent {


   constructor(private service: ServicService){}

  thirdcalled(){
      this.service.subs()
  }

  // obj = new Observable((ob)=>{
  //  setTimeout(()=>ob.next('1'),1000),
  //  setTimeout(()=>ob.next('2'),2000)
  // });

   arr:number[] = [1,2,3,4,5,6];
  obj = from(this.arr);

  ngOnInit(){
     this.obj.subscribe((val)=>{
       console.log(val)
     })
  }
}
