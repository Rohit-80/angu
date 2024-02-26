import { Component, OnChanges, SimpleChanges, ViewChild, Directive, inject , DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewcompComponent } from './newcomp/newcomp.component';
import { MydirectiveDirective } from './mydirective.directive';
import {NewdirecDirective} from './newdirec.directive'
import { ThridComponent } from './thrid/thrid.component';
import { ServicService } from './services/servic.service';
import { AboutcpComponent } from './aboutcp/aboutcp.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewcompComponent, NewdirecDirective,ThridComponent,AboutcpComponent],
  // template : `<div appNewdirec>  direct </div>`

 providers : [ThridComponent],
  //  template : `<h1> hello world </h1>`,
   styles : `h1{color : red}`,
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  condition:boolean = false;

 @ViewChild('app-newcomp') sourceOutput : string = 'default' ;
  myname = 'my-app2';
  title = 'hello';
  papaValue : string = 'Hi Bachha !!';

  value = this.sourceOutput;


   call(event : any){
    this.papaValue = this.papaValue === 'Hi Bachha !!' ?  'Change Son' : 'Hi Bachha !!';
    console.log(event)
    // alert('coooooooool !!');
   }

   serv = inject(ServicService);

   ngOnInit(){
    this.serv.eventer.subscribe((val:string)=>{
        console.log('subscalled'+val)
    },(err=>
       console.log('subs end')
    ))

   }

  unsubs(){
     this.serv.eventer.unsubscribe();
  }



}
